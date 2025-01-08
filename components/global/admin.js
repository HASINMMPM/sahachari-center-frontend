import axios from 'axios';
import { create } from 'zustand'
const adminDetails =create ((set)=>({
    token:"",
    error:"",
    adminLogin: async (data)=>{
        console.log("admin login");
        try {
            const response = await axios.post("http://localhost:3000/admin/login", data, {
                headers: {
                  "Content-Type": "application/json", 
                },
              });
              console.log("Response:", response);
              set({token:response.data.token, error:""})
              
            
        } catch (error) {
            console.log("error in login",error)
            set({error:error.message})
        }
    }
}))
export default adminDetails ;