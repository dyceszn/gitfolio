import React, { useContext } from "react";
import WrapperStyles from "../Styles/Wrapper.module.css";
import RepositoryStyle from "../Styles/Repo.module.css";
import ProfileStyle from "../Styles/Profile.module.css";
import { ArrowGreen, ArrowPurple, Star, StarUnFilled } from "../assets";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

interface WrapperProps {
  isHome: Boolean;
  isRepository: Boolean;
  isProfile: Boolean;
  selectedRepo?: any;
}

// Wrapper component
const Wrapper: React.FC<WrapperProps> = ({
  isHome,
  isRepository,
  isProfile,
  selectedRepo,
}) => {
  // Initialize hooks
  const navigate = useNavigate();
  const { profileData, setUsername, setProfileData, setRepoData } =
    useContext(UserContext) || {};

  const NoOfStars = selectedRepo?.stargazers_count; // Number of stars

  // Functions to navigate to different pages
  const goToRepository = () => {
    navigate("/repository");
  };
  const goBack = () => {
    navigate("/");
  };

  // Function to log out
  const logOut = () => {
    if (setUsername && setRepoData && setProfileData) {
      setRepoData([]);
      setProfileData(null);
      setUsername("");
    }
    navigate("/");
  };

  return (
    <>
      {/* Wrapper for home page */}

      {isHome && (
        <div className={WrapperStyles.wrapper}>
          <div className={WrapperStyles.container}>
            <div className={WrapperStyles.box_1}>
              <div className={WrapperStyles.row}>
                <div className={WrapperStyles.item_1}></div>
                <div className={WrapperStyles.item_2}></div>
                <div className={WrapperStyles.item_3}></div>
              </div>
              <div className={WrapperStyles.row}>
                <div className={WrapperStyles.item_4}></div>
                <div className={WrapperStyles.item_5}></div>
              </div>
              <div className={WrapperStyles.row}>
                <div className={WrapperStyles.item_6}>
                  {" "}
                  <span>gitfolio &copy; dyceszn 2024. All rights reserved</span>
                </div>
              </div>
            </div>
            <div className={WrapperStyles.box_2}>
              <p className={`${WrapperStyles.p_1} ${WrapperStyles.minimal}`}>
                Minimal.
              </p>
              <p className={`${WrapperStyles.p_2} ${WrapperStyles.seamless}`}>
                Seamless.
              </p>
              <p className={WrapperStyles.all_in_one}>
                <span className={WrapperStyles.p_3}>All.</span>{" "}
                <span className={WrapperStyles.p_4}>in.</span>{" "}
                <span className={WrapperStyles.p_5}>One.</span>{" "}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Wrapper for Repository */}

      {isRepository && selectedRepo && (
        <div className={WrapperStyles.wrapper}>
          <div className={RepositoryStyle.main_bar}>
            <div className={RepositoryStyle.col_1}>
              <div className={RepositoryStyle.row_1}>
                <p className={RepositoryStyle.bold}>
                  <span>Repository name:</span> {selectedRepo.name}
                </p>
                <div className={RepositoryStyle.stars}>
                  {NoOfStars === 0
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <img
                          key={index}
                          src={StarUnFilled}
                          alt=""
                          className={RepositoryStyle.star}
                        />
                      ))
                    : Array.from({ length: NoOfStars })
                        .slice(0, 20)
                        .map((_, index) => (
                          <img
                            key={index}
                            src={Star}
                            alt=""
                            className={RepositoryStyle.star}
                          />
                        ))}
                </div>
                <p className={RepositoryStyle.semibold}>Description</p>

                <div className={RepositoryStyle.textbox}>
                  <div className={RepositoryStyle.outer}>
                    <div className={RepositoryStyle.inner}>
                      <p>
                        {selectedRepo.description ||
                          "This repository doesn’t have a description yet. The owner might have forgotten to add one, or it could be a work in progress. Feel free to explore the repository to learn more."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={RepositoryStyle.row_2}>
                <a
                  href={selectedRepo.html_url}
                  className={RepositoryStyle.delete}
                >
                  Delete Repository
                </a>
              </div>
            </div>

            <div className={RepositoryStyle.col_2}>
              <div className={RepositoryStyle.row_1}>
                <ul className={RepositoryStyle.ul}>
                  <li>
                    <b>Primary language:</b> {selectedRepo.language}
                  </li>
                  <li>
                    <b>Last updated:</b> {selectedRepo.updated_at}
                  </li>
                  <li>
                    <b>Watchers:</b> {selectedRepo.watchers}
                  </li>
                  <li>
                    <b>License type:</b> {selectedRepo.license?.name}
                  </li>
                  <li>
                    <b>Url:</b> {selectedRepo.html_url}
                  </li>
                  <li>
                    <b>Views:</b> {selectedRepo.id}
                  </li>
                </ul>
              </div>
              <div className={RepositoryStyle.row_2}>
                <button className={RepositoryStyle.btn_2} onClick={logOut}>
                  <img src={ArrowPurple} alt="" className="arrow" />
                  <p>Back to home</p>
                </button>

                <button
                  className={RepositoryStyle.btn}
                  onClick={() => {
                    window.open(selectedRepo.html_url, "_blank");
                  }}
                >
                  <p>Work on this repository</p>
                  <img src={ArrowGreen} alt="" className="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wrapper for Profile Page */}

      {isProfile && (
        <div className={WrapperStyles.wrapper}>
          <div className={ProfileStyle.main_bar}>
            <div className={ProfileStyle.col_1}>
              <p className={ProfileStyle.bold}>
                <span>Name:</span> {profileData?.name}
              </p>
              <p className={ProfileStyle.semibold}>Bio</p>
              <div className={ProfileStyle.textbox}>
                <div className={ProfileStyle.outer}>
                  <div className={ProfileStyle.inner}>
                    <p>{profileData?.bio || "words..."}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={ProfileStyle.col_2}>
              <div className={ProfileStyle.row_1}>
                <ul className={ProfileStyle.ul}>
                  <li>ID: {profileData?.id}</li>
                  <li>Username: {profileData?.login}</li>
                  <li>Followers: {profileData?.followers}</li>
                  <li>Following: {profileData?.following}</li>
                  <li>Repositories: {profileData?.public_repos}</li>
                  <li>Email: {profileData?.email}</li>
                  <li>Created: {profileData?.created_at}</li>
                </ul>
              </div>
              <div className={ProfileStyle.row_2}>
                <button className={ProfileStyle.btn_1} onClick={goToRepository}>
                  <p>Yessurr</p>
                  <img src={ArrowGreen} alt="#" className="arrow" />
                </button>
                <button className={ProfileStyle.btn_2} onClick={goBack}>
                  <img src={ArrowPurple} alt="" className="arrow" />
                  <p>Nah... run it back</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wrapper;
