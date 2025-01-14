// import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "../components/admin/Login.jsx";
import Home from "../components/main/Home.jsx";
import AllTools from "../components/main/AllTools.jsx";

import ItemList from "../components/admin/ItemList.jsx";
import AddTool from "../components/admin/AddTool.jsx";
import AddOrder from "../components/admin/AddOrder.jsx";
import AllOrders from "../components/admin/AllOrders.jsx";
import Applications from "../components/admin/Application.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tools" element={<AllTools />} />

        <Route path="dashboard/order/all" element={<AllOrders />} />
        <Route path="dashboard/order/all/new" element={<AddOrder />} />
        <Route path="dashboard/tools" element={<ItemList />} />
        <Route path="dashboard/tools/add" element={<AddTool />} />
        <Route path="dashboard/application" element={<Applications />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
