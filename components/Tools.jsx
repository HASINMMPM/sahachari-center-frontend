import React, { useEffect, useState } from "react";
import "./styles/tools.css";
import axios from "axios";

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
      <h2 className="">What we Have</h2>
      {loading ? (
        <h2 className="text-center">Loading...</h2>
      ) : (
        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-card">
              <img
                className="rounded-t-lg w-full"
                src={tool.image}
                alt={tool.name}
              />
              <hr />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {tool.name}
                </h5>
                <p className="description font-normal text-gray-700 dark:text-gray-400">
                  {tool.description}
                </p>
                <span className="available">Available</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
