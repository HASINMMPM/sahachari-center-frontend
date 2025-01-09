import { React, useEffect } from "react";
import "./styles/itemList.css";
import itemsDetails from "../global/items";
import { Link } from "react-router-dom";
const ItemList = () => {
  const { items, itemFetch, loading, deleteItem, inceItem, decItem } =
    itemsDetails();

  useEffect(() => {
    console.log("Fetching items...");
    itemFetch();
  }, [itemFetch]);

  const dltItem = (id) => {
    console.log("Deleting item with ID: ", id);
    deleteItem(id);
  };
  const decrementItem = (id) => {
    console.log("Decreasing quantity of item with ID: ", id);
    decItem(id);
  };
  const incrementItem = (id) => {
    console.log("Increasing quantity of item with ID: ", id);
    inceItem(id);
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
        <h1>All Items</h1>
        <button className="">
          <Link to="add">Add item</Link>
        </button>
      </div>
      <hr />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Buy/Sponser
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">
                  <img
                    src={item.image}
                    className="w-16 md:w-32 lg:w-52 object-cover max-w-full max-h-full"
                    alt={item.name}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4">
                  <div className="count">
                    <button
                      onClick={() => decrementItem(item._id)}
                      className="countButton"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 1h16"
                        />
                      </svg>
                    </button>

                    <span>{item.count}</span>

                    <button
                      onClick={() => incrementItem(item._id)}
                      className="countButton"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.purchase}
                </td>
                <td className="px-6 py-4 " onClick={() => dltItem(item._id)}>
                  <span className="cursor-pointer text-red-700">Remove</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ItemList;
