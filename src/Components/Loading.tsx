import React from "react";
import LoaderStyles from "../Styles/Loading.module.css";

// Loading component
const Loading = () => {
  return (
    <div className={LoaderStyles.container}>
      <span className={LoaderStyles.loader}></span>
    </div>
  );
};

export default Loading;
