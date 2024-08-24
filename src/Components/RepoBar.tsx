import React, { useState, useContext, useEffect } from "react";
import RepoBox from "./RepoBox";
import RepositoryStyle from "../Styles/Repo.module.css";
import { Add } from "../assets";
import { UserContext } from "../context/UserContext";

interface RepoBarProps {
  onSelectRepo: (repo: any) => void;
}

// RepoBar component
const RepoBar: React.FC<RepoBarProps> = ({ onSelectRepo }) => {
  // Initialize hooks
  const { repoData, username } = useContext(UserContext) || {};
  const safeRepoData = repoData ?? []; // Empty array if repoData is undefined

  // // Pagination logic
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 4;
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = safeRepoData.slice(indexOfFirstItem, indexOfLastItem);
  // const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  // const totalPages = Math.ceil(safeRepoData.length / itemsPerPage);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 468) {
        setItemsPerPage(1); // For mobile view
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2); // For tablet view
      } else if (window.innerWidth < 1100) {
        setItemsPerPage(3); // For tablet view
      } else {
        setItemsPerPage(4); // For desktop view
      }
    };

    // Set initial items per page
    updateItemsPerPage();

    // Add resize event listener
    window.addEventListener("resize", updateItemsPerPage);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = safeRepoData.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(safeRepoData.length / itemsPerPage);

  // Function that collects selected the repo data
  const handleClick = (item: any) => {
    onSelectRepo(item);
  };

  // Function that redirects to the user's github page lol
  const addRepo = () => {
    window.open(`https://www.github.com/${username}`, "_blank");
  };

  return (
    <>
      <div className={RepositoryStyle.repo_bar}>
        <div className={RepositoryStyle.repo_box} onClick={addRepo}>
          <img src={Add} alt="" className={RepositoryStyle.add_img} />
        </div>
        {currentItems?.map((item) => (
          <RepoBox
            key={item.id}
            name={item.name}
            language={item.language}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
      <div className={RepositoryStyle.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? RepositoryStyle.active : ""}
          ></button>
        ))}
      </div>
    </>
  );
};

export default RepoBar;
