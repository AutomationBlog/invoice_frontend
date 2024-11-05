import { SendHorizontal } from "lucide-react";
import { FilePenLine } from "lucide-react";
import { FileX } from "lucide-react";
import PropTypes from "prop-types";
import { axiosInstance } from "../utils/axiosInstance";

const ActionItems = ({ invoice }) => {
  const handleSendEmail = async () => {
    try {
      await axiosInstance
        .post("/api/invoice/send-payment-link", {
          invoiceId: invoice.invoiceId,
        })
        .then((res) => {
          if (res.data.success) {
            alert("Email sent successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditInvoice = () => {
    alert("Edit Invoice");
  };

  const handleDeleteInvoice = async () => {
    try {
      await axiosInstance
        .delete(`/api/invoice/delete-invoice/${invoice.invoiceId}`)
        .then((res) => {
          if (res.data.success) {
            alert("Invoice deleted successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-2 flex-row">
      <SendHorizontal
        className="w-6 h-6 cursor-pointer text-accent"
        onClick={handleSendEmail}
      />
      <FilePenLine
        className="w-6 h-6 cursor-pointer text-info"
        onClick={handleEditInvoice}
      />
      <FileX
        className="w-6 h-6 cursor-pointer text-error"
        onClick={handleDeleteInvoice}
      />
    </div>
  );
};

export default ActionItems;

ActionItems.propTypes = {
  invoice: PropTypes.object.isRequired,
};
