

import React, { useEffect } from "react";
import "./styles/tools.css";
import ToolCard from "./ToolCard";
import { Link } from "react-router-dom";
import itemsDetails from "../global/items.js";

export const Tools = () => {
  const { error, loading, items, itemFetch } = itemsDetails()


  useEffect(() => {
    console.log("Fetching items...");
    itemFetch();
  }, [itemFetch]);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <section id="tools">
      <div className="flex flex-row justify-between items-center head">
        <h2 className="">What we Have</h2>
        <Link to="/tools" className="more">View more</Link>
      </div>
      {loading ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="tools-grid">
          {items.slice(0, 4).map((tool) => (
            <ToolCard key={tool._id} singleTool={tool} />
          ))}
        </div>
      )}
    </section>
  );
};
