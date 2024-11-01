import AddInvoice from "../components/AddInvoice";
import TableItems from "../components/TableItems";

const Dashboard = () => {
  return (
    <div
      id="invoice-container"
      className="container mx-auto my-10 h-auto w-auto"
    >
      <div id="invoice-title" className="flex justify-between">
        <div id="invoice-title-left">
          <h3 className="text-2xl font-bold">Invoice</h3>
        </div>
        <div id="invoice-title-right">
          <AddInvoice />
        </div>
      </div>
      <TableItems />
    </div>
  );
};

export default Dashboard;
