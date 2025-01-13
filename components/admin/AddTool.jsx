import { useForm } from "react-hook-form";
import "./styles/addTool.css";
import itemsDetails from "../global/items";
import { cookieToken } from "../global/admin";

export default function AddTool() {
  const {addItem} =itemsDetails()
  const { token } = cookieToken();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   addItem(data)
  };
  if (!token) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 >You need to be logged in to access this page.</h1>
      </div>
    );
  }
  return (
    <section className="section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add Tool</h1>
       
        <div className="grp">
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            placeholder="Enter tool name here"
            {...register("name", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="description">Discription</label>
          <textarea
            placeholder="Enter brief description here..."
            {...register("description", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="count">Count</label>
          <input
            type="number"
            placeholder="Enter tool count here"
            {...register("count", { required: true })}
          />
        </div>

        <div className="grp">
          <select {...register("purchase", { required: true })}>
            <option value="Buy">Buy</option>
            <option value="Sponser">Sponser</option>
          </select>
        </div>

        <div className="grp">
          <label htmlFor="image">Image</label>
          <textarea
            type="text"
            placeholder="Enter Image URL here"
            {...register("image", { required: true })}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
