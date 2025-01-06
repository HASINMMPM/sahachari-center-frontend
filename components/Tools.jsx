import React, { useEffect, useState } from "react";
import "./styles/tools.css";
import axios from "axios";
import ToolCard from "./ToolCard";
import { Link } from "react-router-dom";

export const Tools = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTools() {
    try {
      const response = await axios.get("http://localhost:3000/item/all");
      const data = response.data;
      setTools(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTools();
  }, []);

  return (
    <section id="tools">
      <div className="flex flex-row justify-between item-center head">
      <h2 className="">What we Have</h2>
        <Link to="/tools">View more</Link>
      </div>
      {loading ? (
        <h2 className="text-center">Loading...</h2>
      ) : (
        <div className="tools-grid">
          {tools.map((tool) => (
            <ToolCard key={tool._id} singleTool={tool} />
          ))}
        </div>
      )}
    </section>
  );
};
