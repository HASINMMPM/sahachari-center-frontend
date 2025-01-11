import React, { useEffect, useState } from "react";
import "./styles/itemList.css";
import itemsDetails from "../global/items";
import { Link } from "react-router-dom";

const AllOrders = () => {
  const { orderFetch, loading, order, returnOrder } = itemsDetails();
  const [filterText, setFilterText] = useState("All Transitions");
  const [filterOrder, setFilterOrder] = useState([]);

  
  useEffect(() => {
    console.log("Fetching items...");
    orderFetch();
  }, [orderFetch]);

 
  useEffect(() => {
    if (filterText === "Unreturned") {
      setFilterOrder(order);
    } else {
      setFilterOrder(order.filter((o) => !o.returnStatus));
    }
  }, [order, filterText]);

  const handleReturn = (id) => {
    returnOrder(id);
    console.log("Returning item with ID:", id);
  };

  const handleFilter = () => {
    console.log("Handle filter clicked");
    setFilterText((prevText) =>
      prevText === "All Transitions" ? "Unreturned" : "All Transitions"
    );
  };

  if (loading) {
    return (
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
    );
  }

  return (
    <section className="section">
      <div className="head_Tool">
        <h1>All Transactions</h1>
        <button>
          <Link to="new">Add Order</Link>
        </button>
      </div>
      <h3
        onClick={handleFilter}
        className="filter"
        style={{ cursor: "pointer", color: "blue" }}
      >
        show {filterText}
      </h3>
      <hr />

      {filterOrder.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Item</th>
                <th scope="col" className="px-6 py-3">Item code</th>
                <th scope="col" className="px-6 py-3">Patient Name</th>
                <th scope="col" className="px-6 py-3">Phone Number</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Return</th>
              </tr>
            </thead>
            <tbody>
              {filterOrder.map((orderItem) => (
                <tr
                  key={orderItem._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {orderItem.itemName}
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {orderItem. itemCode}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {orderItem.nameOfPatient}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {orderItem.phoneNumberOfPatient}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {new Date(orderItem.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {orderItem.returnStatus ? (
                      <span className="text-green-600">Returned</span>
                    ) : (
                      <button
                        className="rounded-md"
                        onClick={() => handleReturn(orderItem._id)}
                      >
                        Return <br /> Confirm
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No orders</h1>
      )}
    </section>
  );
};

export default AllOrders;
