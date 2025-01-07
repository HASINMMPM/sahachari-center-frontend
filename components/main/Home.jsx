import React from "react";
import About from "./About";
import Location from "./Location";
import { Tools } from "./Tools";
import Application from "./Application";

const Home = () => {
  return (
    <div>
      <About />
      <hr />
      <Location />
      <hr />
      <Tools />
      <hr/>
      <Application/>
    </div>
  );
};

export default Home;
