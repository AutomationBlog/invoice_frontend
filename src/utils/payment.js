import { axiosInstance } from "./axiosInstance";

export const razorpayPayment = async (data) => {
  const response = await axiosInstance.post("/api/payment/create-payment", {
    amount: data.amount,
  });
  var options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: response.data.order.amount,
    currency: "INR",
    name: "Service Invoice",
    description: "Service Invoice Payment",
    image: "",
    order_id: response.data.id,
    handler: async function (response) {
      if (response.razorpay_payment_id) {
        await axiosInstance
          .patch("/api/invoice/update-payment/" + data.invoiceId, {
            paymentId: response.razorpay_payment_id,
            status: "Paid",
          })
          .then((response) => {
            if (response.data.success) {
              alert("Payment successful");
              window.location.href = "/";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    prefill: {
      name: data.name || "",
      email: data.email || "",
      contact: data.phone || "9876543210",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.on("pament.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
  paymentObject.open();
};
