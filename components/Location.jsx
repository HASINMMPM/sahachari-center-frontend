import React from "react";
import "./styles/location.css"; // Create a separate CSS file for styles

const Location = () => {
  return (
    <section id="location" className="location-container">
      <h2 className="text-2xl font-bold  mb-4">Our Location</h2>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe mx-auto "
          
            
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=kolmanna bus stop&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Sahachari Center Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
