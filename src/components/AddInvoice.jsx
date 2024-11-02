import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

const AddInvoice = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreateInvoice = async (e) => {
    e.preventDefault();
    if (!name || !email || !amount) {
      alert("All fields are required");
    }

    const response = await axiosInstance.post("/api/invoice/create-invoice", {
      name,
      email,
      amount,
    });
    if (response.data.success) {
      alert("Invoice created successfully");
    }
    setName("");
    setEmail("");
    setAmount("");
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-accent"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Create Invoice
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Create a New Invoice
          </h3>
          <form onSubmit={handleCreateInvoice}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customer</span>
              </label>
              <input
                type="text"
                placeholder="Customer"
                className="input input-bordered"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="number"
                placeholder="Amount"
                className="input input-bordered"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Create Invoice
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddInvoice;
