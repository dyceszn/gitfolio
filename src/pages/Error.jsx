import React from "react";
import { Link } from "react-router-dom";
import "./styles/error.css";
import Header from "../components/Header";

const Error = () => {
  return (
    <>
      <Header />
      <main className="error-main">
        <p className="error-404">Error 404:</p>
        <div className="error-msgbox">
          <p className="oops">Ooops...</p>
          <p className="error-msg">
            <span>
              Sorry but I am still working on this app, it seems that the page
              you're looking for doesn't exist yet. It may be that the link you
              followed is broken, undefined or the page may have been removed.
              If urgent, please feel free to contact our{" "}
              <a href="#">support team</a> for further assistance.
            </span>
          </p>
        </div>
      </main>
      <hr />
      <div className="footer">
        <Link to="/">
          <div className="button">Back to safety</div>
        </Link>
      </div>
    </>
  );
};

export default Error;
