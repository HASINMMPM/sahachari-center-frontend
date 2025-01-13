import { useForm } from "react-hook-form";
import "./styles/addTool.css";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import itemsDetails from "../global/items";
import { cookieToken } from "../global/admin";

const schema = yup
  .object({
    nameOfPatient: yup.string().required("Name of the patient is required."),
    phoneNumberOfPatient: yup
      .number()
      .typeError("Phone number of the patient must be a valid number.")
      .required("Phone number of the patient is required.")
      .test(
        "len",
        "Phone number of the patient must be between 10 and 13 digits.",
        (val) =>
          val && val.toString().length >= 10 && val.toString().length <= 13
      ),
    place: yup.string().required("Place is required."),
    address: yup.string().required("Address is required."),
    phoneNumber: yup
      .number()
      .typeError("Phone number must be a valid number.")
      .required("Phone number is required.")
      .test(
        "len",
        "Phone number must be between 10 and 13 digits.",
        (val) =>
          val && val.toString().length >= 10 && val.toString().length <= 13
      ),
    taker: yup.string().required("Taker's name is required."),
    date: yup
      .date()
      .typeError("Date must be a valid date.")
      .required("Date is required."),
  })
  .required();

export default function AddOrder() {
  const { addOrder, items, itemFetch, loading } = itemsDetails();
  const { token } = cookieToken();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    console.log("Fetching items...");
    itemFetch();
  }, [itemFetch]);

  const onSubmit = async (data) => {
    addOrder(data, reset);
  };

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
        <h1>Outgoing Form</h1>

        <div className="grp">
          <label htmlFor="nameOfPatient">Patient Name</label>
          <input
            type="text"
            placeholder="Enter patient name here"
            {...register("nameOfPatient", { required: true })}
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.nameOfPatient?.message}
          </p>
        </div>

        <div className="grp">
          <label htmlFor="phoneNumberOfPatient">Phone Number</label>
          <input
            type="number"
            placeholder="Enter patient Number here with country code (+918089898989"
            {...register("phoneNumberOfPatient", {
              min: 10,
              max: 13,
              required: true,
            })}
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.phoneNumberOfPatient?.message}
          </p>
        </div>

        <div className="grp">
          <label htmlFor="place">Place</label>
          <input
            type="text"
            placeholder="Enter patient place here"
            {...register("place", { required: true })}
          />
          <p className="text-red-500 text-xs mt-1">{errors.place?.message}</p>
        </div>

        <div className="grp">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="Enter patient address here"
            {...register("address", { required: true })}
          />
          <p className="text-red-500 text-xs mt-1">{errors.address?.message}</p>
        </div>

        <div className="grp">
          <label htmlFor="handOverby">Sahachari Center Member</label>
          <input
            type="text"
            placeholder="name of giver"
            {...register("handOverby", { required: true })}
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.handOverby?.message}
          </p>
        </div>

        <div className="grp">
          <label htmlFor="taker">Receiver</label>
          <input
            type="text"
            placeholder="Enter receiver Name..."
            {...register("taker", { required: true })}
          />
          <p className="text-red-500 text-xs mt-1">{errors.taker?.message}</p>
        </div>

        <div className="grp">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            placeholder="Enter receiver Number..."
            {...register("phoneNumber", { min: 10, max: 13 })}
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.phoneNumber?.message}
          </p>
        </div>

        <div className="grp">
          <label htmlFor="relationWithPatient">Relation with patient</label>
          <input
            type="text"
            placeholder="Enter relation with patient"
            {...register("relationWithPatient")}
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.relationWithPatient?.message}
          </p>
        </div>

        <div className="grp">
          <label htmlFor="itemCode">Item </label>
          <select {...register("item", { required: true })}>
            {items.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grp">
          <label htmlFor="itemCode">Item Code</label>
          <input
            type="text"
            placeholder="Enter patient name here"
            {...register("itemCode", { required: true })}
          />
          <p className="text-red-500 text-xs mt-1">
            {errors.nameOfPatient?.message}
          </p>
        </div>

        <div className="grp">
          <label htmlFor="date">Date</label>
          <input type="date" {...register("date", { required: true })} />
          <p className="text-red-500 text-xs mt-1">{errors.date?.message}</p>
        </div>

        <div className="grp">
          <label htmlFor="time">Time</label>
          <input type="time" {...register("time", { required: true })} />
          <p className="text-red-500 text-xs mt-1">{errors.time?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
