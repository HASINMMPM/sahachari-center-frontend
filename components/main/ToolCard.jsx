import React from 'react'
import "./styles/tools.css";

const ToolCard = ({singleTool}) => {
  return (
    <div key={singleTool.id} className="tool-card">
    <img
      className="rounded-t-lg w-full"
      src={singleTool.image}
      alt={singleTool.name}
    />
    <hr />
    <div className="p-5">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {singleTool.name}
      </h5>
      <p className="description font-normal text-gray-700 dark:text-gray-400">
        {singleTool.description}
      </p>
      <span className="available">Available ({singleTool.availableCount})</span>
    </div>
  </div>
  )
}

export default ToolCard