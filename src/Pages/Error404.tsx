import React from "react";
import Error404Style from "../Styles/Error404.module.css";
import { Failed } from "../assets";
import { useNavigate } from "react-router-dom";

// Error404 component
const Error404: React.FC = () => {
  // Initialize hooks
  const navigate = useNavigate();

  // Function to go back to the home page
  const handleClick = () => {
    navigate("./");
  };

  return (
    <div className={Error404Style.main}>
      <main className={Error404Style.container}>
        <div className={Error404Style.box1}>
          <p className={Error404Style.p1}>Error 404</p>
          <img className={Error404Style.img} src={Failed} alt="" />
          <p className={Error404Style.p2}>
            It seems the page your trying to reach does not exist.
          </p>
        </div>
        <button className={Error404Style.box2} onClick={handleClick}>
          Back to safety
        </button>
      </main>
    </div>
  );
};

export default Error404;
