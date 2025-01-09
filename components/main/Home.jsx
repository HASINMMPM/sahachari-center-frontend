import React from "react";
import About from "./About";
import Location from "./Location";
import { Tools } from "./Tools";
import Application from "./Application";
import { cookieToken } from "../global/admin";

const Home = () => {
  const {token} =cookieToken()
 
  return (
    <>
    {
      token ? <div className="h-screen flex justify-center items-center">
        <p className="adminHometext">Welcome to the Admin Dashboard!</p>
      </div> : 
    <div>
      <h1>{token} recieved</h1>
      <About />
      <hr />
      <Location />
      <hr />
      <Tools />
      <hr/>
      <Application/>
    </div>
    }
    </>
  );
};

export default Home;
