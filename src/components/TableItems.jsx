import PropTypes from "prop-types";
import ActionItems from "./ActionItems";
import { IndianRupee } from "lucide-react";

const TableItems = ({ invoices }) => {
  return (
    <div id="invoice-items" className="overflow-x-auto pt-5">
      <table id="invoice-table" className="table">
        <thead>
          <tr>
            <th>Invoice Date</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Status</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.invoiceId}>
              <td>{new Date(invoice.createdAt).toDateString()}</td>
              <td>{invoice.name}</td>
              <td>{invoice.email}</td>
              <td>{invoice.status}</td>
              <td className="flex items-center flex-row">
                <IndianRupee size={12} />
                {invoice.amount}
              </td>
              <td>
                <ActionItems invoice={invoice} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItems;

TableItems.propTypes = {
  invoices: PropTypes.array.isRequired,
};
