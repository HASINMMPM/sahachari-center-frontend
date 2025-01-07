// import React, { useEffect, useState } from "react";
// import "./styles/tools.css";
// import axios from "axios";
// import ToolCard from "./ToolCard";
// import { Link } from "react-router-dom";

// export const Tools = () => {
//   const [tools, setTools] = useState([]);
//   const [loading, setLoading] = useState(true);

//   async function fetchTools() {
//     try {
//       const response = await axios.get("http://localhost:3000/item/all");
//       const data = response.data;
//       setTools(data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchTools();
//   }, []);

//   return (
//     <section id="tools">
//       <div className="flex flex-row justify-between item-center head">
//         <h2 className="">What we Have</h2>
//         <Link to="/tools">View more</Link>
//       </div>
//       {loading ? (
//         <div class="lds-roller">
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       ) : (
//         <div className="tools-grid">
//           {tools.slice(0, 4).map((tool) => (
//             <ToolCard key={tool._id} singleTool={tool} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

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
        <Link to="/tools">View more</Link>
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
