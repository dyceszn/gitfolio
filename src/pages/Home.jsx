import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles/home.css";
import { getUser } from "../api";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await getUser(username); // Fetch user data
      navigate("/menu", { state: { userData } }); // Pass userData to Menu
    } catch (error) {
      console.error("Error handling form submission:", error);
      alert("User not found");
    }
  };

  return (
    <>
      <Header />
      <main className="home-main">
        <div className="home-row home-row-1">
          <div className="why-us">
            <p>
              gitfolio by dyceszn, uses the github API to fetch your repository,
              so you can easily modify, update, modify and delete your
              repository. Begin your journey now...
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="home-input"
                type="text"
                placeholder="Enter your github username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="push" type="submit">
                push
              </button>
            </form>
          </div>
          <div className="join-in">
            <img src="#" alt="" />
          </div>
        </div>
        <div className="home-row home-row-2">
          <div className="home-column col-1">
            <img src="" alt="" />
            <p>All your repositories in one place</p>
          </div>
          <div className="home-column home-col-2">
            <img src="#" alt="" />
            <p>Minimal design to streamline your github workflow</p>
          </div>
          <div className="home-column home-col-3">
            <img src="#" alt="" />
            <p>Update your github repository in real time</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
