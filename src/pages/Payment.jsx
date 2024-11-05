import { useParams } from "react-router-dom";
import { razorpayPayment } from "../utils/payment";
import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { IndianRupee } from "lucide-react";

const Payment = () => {
  const { paymentToken } = useParams();
  const [invoice, setInvoice] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    getInvoice();
  }, [paymentToken]);

  const getInvoice = async () => {
    console.log(paymentToken);
    try {
      const response = await axiosInstance.get(
        "/api/invoice/get-invoice/" + paymentToken
      );
      if (response.data.success) {
        setInvoice(response.data.invoice);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log("Error while getting invoice", error);
    }
  };
  const handlePayment = () => {
    // Handle payment logic here
    razorpayPayment();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-slate-400 text-black w-96">
        {error ? (
          <div className="card-body">
            <h1>No Invoice Found</h1>
          </div>
        ) : (
          <div className="card-body ">
            <p className="text-center font-bold underline">Payment Details</p>
            <p>
              Invoice ID: <span className="font-bold">{invoice.invoiceId}</span>
            </p>
            <p>
              Customer Name: <span className="font-bold">{invoice.name}</span>
            </p>
            <p className="flex">
              Invoice Amount:{" "}
              <span className="font-bold flex items-center">
                <IndianRupee size={14} />
                {invoice.amount}
              </span>
            </p>
            <div className="card-actions justify-end">
              <button className="btn" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
