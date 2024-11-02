import { useEffect, useState } from "react";
import AddInvoice from "../components/AddInvoice";
import TableItems from "../components/TableItems";
import { axiosInstance } from "../utils/axiosInstance";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

const Dashboard = ({ value }) => {
  const [isInvoiced, setIsInvoiced] = useState(false);

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices();
  }, [isInvoiced]);

  const getInvoices = async () => {
    try {
      const response = await axiosInstance.get("/api/invoice/get-invoices");
      if (response.data.success) {
        setInvoices(response.data.invoices);
      }
    } catch (error) {
      console.log("Error while getting invoices", error);
    }
  };

  return (
    <>
      <Navbar value={value} />
      <div
        id="dashboard-container"
        className="container mx-auto my-10 h-auto w-auto"
      >
        <div
          id="invoice-container"
          className="container mx-auto my-10 h-auto w-auto"
        >
          <div className="container">
            <div id="invoice-title" className="flex justify-between pr-5 pl-5">
              <div id="invoice-title-left">
                <h3 className="text-2xl font-bold">Invoice</h3>
              </div>
              <div id="invoice-title-right">
                <AddInvoice setIsInvoiced={setIsInvoiced} />
              </div>
            </div>
          </div>
          <TableItems invoices={invoices} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  value: PropTypes.string.isRequired,
};
