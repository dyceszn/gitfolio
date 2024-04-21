import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RepoCard from "../components/RepoCard";
import Error from "./Error";
import "./styles/menu.css";
import { getUserRepos } from "../api";

const Menu = () => {
  const location = useLocation();
  const { userData } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserRepos = async () => {
      if (!userData || !userData.login) {
        setLoading(false);
        return;
      }

      try {
        const userRepos = await getUserRepos(userData.login);
        setRepos(userRepos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user repositories:", error);
        setLoading(false);
      }
    };

    fetchUserRepos();
  }, [userData]);

  if (!userData) {
    return <Error />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main className="menu-main">
        <div className="menu-column menu-col-1">
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            style={{ width: "50%", height: "50%" }}
          />
          <ul className="menu-list">
            <li>ID: {userData.id}</li>
            <li>Followers: {userData.followers}</li>
            <li>Following: {userData.following}</li>
            <li>Name: {userData.name}</li>
            <li>Bio: {userData.bio}</li>
            <li>Email: {userData.email}</li>
            <li>Location: {userData.location}</li>
          </ul>
        </div>
        <div className="vertical-line"></div>
        <div className="menu-column menu-col-2">
          <div className="grid-container">
            {repos.map((repo) => (
              <div className="grid-item" key={repo.id}>
                <RepoCard repo={repo} username={userData.login} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
