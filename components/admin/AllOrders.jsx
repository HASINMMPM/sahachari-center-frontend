import { React, useEffect } from "react";
import "./styles/itemList.css";
import itemsDetails from "../global/items";
import { Link } from "react-router-dom";
const AllOrders = () => {
  const { orderFetch, loading, order } = itemsDetails();

  useEffect(() => {
    console.log("Fetching items...");
    orderFetch();
  }, [orderFetch]);

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
        <h1>All transition</h1>
        <button className="">
          <Link to="new">Add order</Link>
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
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                phone Number
              </th>

              <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                ruturn
              </th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) => (
              <tr
                key={order._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {order.nameOfPatient}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {order.item}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {order.nameOfPatient}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {order.phoneNumberOfPatient}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {new Date(order.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  <button className="rounded-md">
                    Return <br /> Confirm
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllOrders;
