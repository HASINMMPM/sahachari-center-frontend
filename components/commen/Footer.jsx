import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/login" className="my-3 p-6">
        login
      </Link>
    </footer>
  );
};

export default Footer;
