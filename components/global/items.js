import { create } from 'zustand'
import axios from 'axios';
const itemsDetails = create((set) => ({
    items: [],
    loading: "",
    error: "",
  
    itemFetch: async () => {
      console.log("Fetching items...");
      set({ loading: true, error: null });
      try {
        const response = await axios.get("http://localhost:3000/item/all");
        console.log("Fetched items:", response.data);
        set({ items: response.data, loading: false });
    
      } catch (error) {
        console.error("Error fetching items:", error);
        set({ error: error.message, loading: false });
      }
    },
  }));
  export default itemsDetails