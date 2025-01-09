import { useForm } from "react-hook-form";
import "./styles/addTool.css";
import itemsDetails from "../global/items";
import { useEffect } from "react";

export default function AddOrder() {
  const { addOrder, items, itemFetch } = itemsDetails();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("Fetching items...");
    itemFetch();
  }, [itemFetch]);

  const onSubmit = async (data) => {
    addOrder(data);
  };

  return (
    <section className="section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Outgoing Form</h1>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="grp">
          <label htmlFor="nameOfPatient">Patient Name</label>
          <input
            type="text"
            placeholder="Enter patient name here"
            {...register("nameOfPatient", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="phoneNumberOfPatient">Phone Number</label>
          <input
            type="number"
            placeholder="Enter patient Number here..."
            {...register("phoneNumberOfPatient", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="place">Place</label>
          <input
            type="text"
            placeholder="Enter patient place here"
            {...register("place", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="Enter patient address here"
            {...register("address", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="handOverby">Sahachari Center Member</label>
          <input
            type="text"
            placeholder="name of giver"
            {...register("handOverby", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="taker">Receiver</label>
          <input
            type="text"
            placeholder="Enter receiver Name..."
            {...register("taker", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            placeholder="Enter receiver Number..."
            {...register("phoneNumber", { required: true })}
          />
        </div>

        <div className="grp">
          <label htmlFor="relationWithPatient">Relation with patient</label>
          <input
            type="text"
            placeholder="Enter relation with patient"
            {...register("relationWithPatient")}
          />
        </div>

        <div className="grp">
          <select {...register("item", { required: true })}>
            {items.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grp">
          <label htmlFor="date">Date</label>
          <input type="date" {...register("date", { required: true })} />
        </div>

        <div className="grp">
          <label htmlFor="time">Time</label>
          <input type="time" {...register("time", { required: true })} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
