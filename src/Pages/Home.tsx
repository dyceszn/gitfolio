import React, { useState, useContext, useEffect } from "react";
import HomeStyle from "../Styles/Home.module.css";
import Wrapper from "../Components/Wrapper";
import { ArrowPurpleLeft } from "../assets";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// Home component
const Home: React.FC = () => {
  // Initialize hooks
  const { setUsername, setProfileData, setRepoData } =
    useContext(UserContext) || {};
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  // Reset user context and local storage when the home page is loaded
  useEffect(() => {
    if (setUsername && setProfileData && setRepoData) {
      setUsername("");
      setProfileData(null);
      setRepoData([]);
    }
    localStorage.removeItem("username");
    localStorage.removeItem("profileData");
    localStorage.removeItem("repoData");
  }, [setUsername, setProfileData, setRepoData]);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (setUsername) {
      await setUsername(input);
    }
    navigate("/profile");
  };

  return (
    <div>
      <main>
        <section className={HomeStyle.upper_container}>
          <form action="#" className={HomeStyle.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Let's have your github username"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <img src={ArrowPurpleLeft} alt="" className={HomeStyle.arrow} />
            </button>
          </form>
        </section>
        <section className={HomeStyle.lower_container}>
          <Wrapper isHome={true} isRepository={false} isProfile={false} />
        </section>
      </main>
    </div>
  );
};

export default Home;
