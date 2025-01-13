import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

const adminDetails = create((set) => ({
  token: "",
  error: "",
  adminLogin: async (data) => {
    console.log("admin login");
    try {
      const URL ="https://sahachari-center-backend.onrender.com/v1"
      const response = await axios.post(
        `${URL}/admin/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data.token);
      const token = response.data.token; 
      console.log("token", token);
      set({ token, error: "" });
      Cookies.set("token", token, { expires: 7, secure: true });
    } catch (error) {
      console.log("error in login", error);
      set({ error: error.response?.data?.message || "An error occurred" });
    }
  },
}));
const cookieToken = create((set) => ({
  token: Cookies.get("token"),
  removeToken: () => {
    Cookies.remove("token");
    set({ token: "" });
  },
}));

export { cookieToken, adminDetails };
