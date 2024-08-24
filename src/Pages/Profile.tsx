import React, { useContext, useEffect } from "react";
import ProfileStyle from "../Styles/Profile.module.css";
import { Wrapper, Loading } from "../Components";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

// Profile component
const Profile: React.FC = () => {
  // Initialize hooks
  const navigate = useNavigate();
  const { profileData, loading } = useContext(UserContext) || {};

  // UseEffect hook to check if the profile data is loaded
  useEffect(() => {
    if (!loading && !profileData) {
      navigate("/errmsg", {
        state: {
          message:
            "Sorry, something went wrong. Please go back, refresh the page, and try again.",
        },
      });

      return;
    }
  }, [loading, profileData, navigate]);

  // If the profile data is still loading, show the loading component
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <main>
        <section className={ProfileStyle.upper_container}>
          <div className={ProfileStyle.profile_bar}>
            <img
              src={profileData?.avatar_url}
              alt=""
              className={ProfileStyle.avatar}
            />
            <p className={ProfileStyle.heading}>
              This <span>you?</span>
            </p>
          </div>
        </section>
        <section className={ProfileStyle.lower_container}>
          <Wrapper isHome={false} isRepository={false} isProfile={true} />
        </section>
      </main>
    </div>
  );
};

export default Profile;
