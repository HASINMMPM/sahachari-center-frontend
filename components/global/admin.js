import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

const adminDetails = create((set) => ({
  token: "",
  error: "",
  adminLogin: async (data) => {
    console.log("admin login");
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data.token);
      const token = response.data.token; // Correctly assign the token
      console.log("token", token);
      set({ token, error: "" });
      Cookies.set("token", token, { expires: 7, secure: true });
    } catch (error) {
      console.log("error in login", error);
      set({ error: error.response?.data?.message || "An error occurred" });
    }
  },
}));
const cookieToken = create((set)=>({
    token: Cookies.get('token') || '',
    setToken: (token) => set({ token }),
    removeToken: () => set({ token: '' }),
  }));

export { cookieToken,
    adminDetails,
 
 };


