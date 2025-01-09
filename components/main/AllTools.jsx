import { React, useEffect } from "react";
import "./styles/allTools.css";
import ToolCard from "./ToolCard";
import itemsDetails from "../global/items";

const AllTools = () => {
  const { items,itemFetch,loading } = itemsDetails();

  useEffect(() => {
    console.log("Fetching items...");
    itemFetch();
  }, [itemFetch]);

  if(loading){

    return(
        <div className="loader">

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
        </div>
    )
  }
  return (
    <section className="section">
      <h1 className="">All Tools</h1>
      {/* Add your tools here */}
      <div className="tools-grid">
        {items.map((tool) => (
          <ToolCard key={tool._id} singleTool={tool} />
        ))}
      </div>
    </section>
  );
};

export default AllTools;
