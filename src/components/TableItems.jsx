const TableItems = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/01/2022</td>
            <td>John</td>
            <td>john@gmail.com</td>
            <td>Paid</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableItems;
