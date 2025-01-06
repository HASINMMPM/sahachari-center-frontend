import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles/login.css";
import axios from "axios";

// Define schema with custom error messages
const schema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(4, "Password must be at least 4 characters").required("Password is required"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const URL = "http://localhost:3000/admin/login";
    alert(JSON.stringify(data, null, 2));
  
    try {
      const response = await axios.post(URL, data, {
        headers: {
          "Content-Type": "application/json", // Ensure proper content type
        },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert(error.response.data.message || "An error occurred");
      } else {
        alert("Unable to connect to the server");
      }
    }
  };
  

  return (
    <main className="flex flex-col justify-center h-screen">
      <div className="box mx-auto">
        <h1 className="my-6 text-2xl font-semibold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              {...register("email")}
              id="email"
                  className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } appearance-none dark:text-white focus:outline-none focus:ring-0 peer`}
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              {...register("password")}
              id="password"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } appearance-none dark:text-white focus:outline-none focus:ring-0 peer`}
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
          </div>

          {/* Submit  */}
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
