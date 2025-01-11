import React from "react";
import {Link} from "react-router-dom";
import "./styles/footer.css"

const Footer = () => {
  return (
    <footer className="flex justify-between items-end ">
      <div className="details">
        <span>Run under,</span>
        <h2>SKSSF Kolmanna</h2>
        <p>Cluster : Malappuram</p>
        <p>Zone : Malappuram</p>
        <p>District : Malappuram East</p>
      </div>
      <Link to="/login" className="my-3 p-6">
        <button>Admin</button>
      </Link>
    </footer>
  );
};

export default Footer;
