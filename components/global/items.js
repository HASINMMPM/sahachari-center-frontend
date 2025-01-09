import { create } from "zustand";

import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000";

const itemsDetails = create((set, get) => ({
  items: [],
  loading: false,
  error: null,
  order:[],
  applications:[],

  itemFetch: async () => {
    console.log("Fetching items...");
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${URL}/item/all`);
      console.log("Fetched items:", response.data);
      set({ items: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching items:", error);
      set({ error: error.message, loading: false });
    }
  },

  deleteItem: async (id) => {
    console.log("Deleting item...");
    set({ loading: true, error: null });
    try {
      await axios.delete(`${URL}/item/remove/${id}`);
      console.log(`Deleted item with ID: ${id}`);
      await get().itemFetch(); 
      Swal.fire({
        icon: "success",
        title:  "Item removed",
        showConfirmButton: true,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error deleting item:", error);
      set({ error: error.message, loading: false });
    }
  },

  addItem: async (data) => {
    console.log("Adding item...");

    try {
      const response = await axios.post(`${URL}/item/add`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.newItem.name);
      Swal.fire({
        icon: "success",
        title: response.data.newItem.name+"  added ",
        showConfirmButton: true,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  },

  inceItem: async (id) => {
    console.log("Deleting item...");
    set({ loading: true, error: null });
    try {
      await axios.put(`${URL}/item/inc/${id}`);
      console.log(`Deleted item with ID: ${id}`);
      await get().itemFetch(); // Fetch updated items
    } catch (error) {
      console.error("Error increment item:", error);
      set({ error: error.message, loading: false });
    }
  },

  decItem: async (id) => {
    console.log("Deleting item...");
    set({ loading: true, error: null });
    try {
      await axios.put(`${URL}/item/dec/${id}`);
      console.log(`Deleted item with ID: ${id}`);
      await get().itemFetch(); // Fetch updated items
    } catch (error) {
      console.error("Error increment item:", error);
      set({ error: error.message, loading: false });
    }
  },

  addOrder: async (data) => {
    console.log("making outgoing...");
    set({ loading: true, error: null });
    try {
    const res=  await axios.post(`${URL}/order/new`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res)
      Swal.fire({
        icon: "success",
        title:  "submitted ",
        showConfirmButton: true,
        timer: 1500,
      });
      setTimeout(location.reload(), 2000);
    
    } catch (error) {
      console.error("Error updating item:", error);
      set({ error: error.message, loading: false });
    }
  },

  orderFetch: async () => {
    console.log("Fetching orders...");
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${URL}/order/all`);
      console.log("Fetched orderes:", response);
      set({ order: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching items:", error.response.data.error);
      set({ error: error.message, loading: false });
    }
  },

  returnOrder: async (id) => {
    console.log("return item :",id);
    set({ loading: true, error: null });
    try {
      await axios.post(`${URL}/order/return/${id}`);
      console.log(`mark return order ID: ${id}`);
      await get().itemFetch(); // Fetch updated items
    } catch (error) {
      console.error("Error return item:", error);
      console.log(error.response.data.error)
      set({ error: error.message, loading: false });
    }
  },
  
  singleItem: async (id) => {
    console.log("get single item...");
    set({ loading: true, error: null });
    try {
     const res= await axios.get(`${URL}/item/view/${id}`);
     console.log(res)
      
    } catch (error) {
      console.error("Error increment item:", error);
      set({ error: error.message, loading: false });
    }
  },

  fetchApplications: async ()=>{
    console.log("Fetching applications...");
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${URL}/application/all`);
      console.log("Fetched applications:", response);
      set({ applications: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching applications:", error);
      set({ error: error.message, loading: false });
    }

  }

}));

export default itemsDetails;
