import React, { useState, useContext, useEffect } from "react";
import RepositoryStyle from "../Styles/Repo.module.css";
import { RepoBar, Wrapper, Loading } from "../Components";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

// Repository component
const Repository: React.FC = () => {
  // Initialize hooks
  const navigate = useNavigate();
  const { loading, repoData } = useContext(UserContext) || {};
  const [selectedRepo, setSelectedRepo] = useState(null);

  // UseEffect hook to check if the repository data is loaded
  useEffect(() => {
    if (!loading && !repoData) {
      navigate("/errmsg", {
        state: { message: "Your session expired. Please log in again." },
      });

      return;
    }
  }, [loading, repoData, navigate]);

  // If the repository data is still loading, show the loading component
  if (loading) {
    return <Loading />;
  }

  // Function to handle when a repo is selected
  const handleSelectRepo = (repo: any) => {
    setSelectedRepo(repo);
  };

  return (
    <div>
      <main>
        <section className={RepositoryStyle.upper_container}>
          <RepoBar onSelectRepo={handleSelectRepo} />
        </section>

        <section className={RepositoryStyle.lower_container}>
          <Wrapper
            isHome={false}
            isRepository={true}
            isProfile={false}
            selectedRepo={selectedRepo}
          />
        </section>
      </main>
    </div>
  );
};

export default Repository;
