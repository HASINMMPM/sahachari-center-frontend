import React from "react";
import About from "./About";
import Location from "./Location";
import { Tools } from "./Tools";

const Home = () => {
  return (
    <div>
      <About />
      <hr />
      <Location />
      <hr />
      <Tools />
    </div>
  );
};

export default Home;
