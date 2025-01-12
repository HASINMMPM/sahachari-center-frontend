import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/footer.css";
import { cookieToken } from "../global/admin";

const Footer = () => {
  const { token, removeToken } = cookieToken();
  const navigate = useNavigate();
  const logout = () => {
    removeToken();
    Swal.fire({
      icon: "success",
      title: "Logout success",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");

    setTimeout(window.location.reload(), 2000);
  };
  return (
    <footer className="flex justify-between items-end ">
      <div className="details">
        <span>Run under,</span>
        <h2>SKSSF Kolmanna</h2>
        <p>Cluster : Malappuram</p>
        <p>Zone : Malappuram</p>
        <p>District : Malappuram East</p>
      </div>
      {token ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <Link to="/login" className="my-3 p-6">
          <button>Login</button>
        </Link>
      )}
    </footer>
  );
};

export default Footer;
