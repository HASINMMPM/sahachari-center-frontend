import React, { useState } from "react";
import "./styles/header.css";
import  { cookieToken } from "../global/admin";
import Swal from "sweetalert2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token,removeToken } = cookieToken();

  let navLinks = [];
  if (token) {
    console.log("token" + token);
    navLinks = [
      { name: "Order", href: "/dashboard/order" },
      { name: "Tools", href: "/dashboard/tools" },
      { name: "Application", href: "/dashboard/application" },
    ];
  } else {
    navLinks = [
      { name: "About", href: "/#about" },
      { name: "Location", href: "/#location" },
      { name: "Tools", href: "/#tools" },
      { name: "Application", href: "/#application" },
      { name: "Call Ambulance", href: "tel:+919995958847" },
    ];
  }
  const logout = () => {
    removeToken();
    Swal.fire({
            icon: "success",
            title: "Logout success",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(window.location.reload(), 2000)
    
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="drop-shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
         <img
           src="https://live.staticflickr.com/4076/4862492962_248dff6b12_b.jpg"
           className="h-8 md:h-12"
           alt="Skssf Logo"
         />
         <span className="name self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-blue-500">
           Sahachari Center
           <br />
           <span className="text-lg md:text-xl">SKSSF Kolmanna</span>
         </span>
       </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 duration-300 hover:text-black"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {token ?
             <li className="text-red-600" onClick={() => logout()}>Logout</li>:<></>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
