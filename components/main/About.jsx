import React from "react";
import "./styles/about.css";
import img from "./../../public/sahachari.jpg"

const About = () => {
  return (
    <section className="max-w-7xl mx-auto " id="about">
      <h2 >About</h2>
      <div className="about-grid ">
        <article className="">
          <p>
            Founded on January 14, 2024, Sahachari Center operates under
            <span className="font-semibold"> SKSSF Kolmanna</span> with the mission to support those in
            need of physical aids. Our center provides essential tools such as
            wheelchairs, walkers, oxygen cylinders, medical cots, and more,
            ensuring that individuals with physical challenges can lead a more
            independent and dignified life.
          </p>
          <p>
            With over <span className="font-semibold">35</span> tools available, Sahachari Center stands as a symbol of
            hope and compassion in the community. We are dedicated to making
            these resources accessible to everyone who needs them, fostering a
            spirit of care and support. Together, we are building a better
            tomorrow, one tool at a time.
          </p>
        </article>
        <img
          src={img}
          alt="Sahachari Center"
        />
      </div>
    </section>
  );
};

export default About;
