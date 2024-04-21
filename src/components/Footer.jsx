import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer>
        <input
          className="footer-input"
          type="search"
          placeholder="Looking for something... Search? (Sorry... Not yet functional)"
        />
      </footer>
    </div>
  );
};

export default Footer;
