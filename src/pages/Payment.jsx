const Payment = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-neutral text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">Invoice Details</h2>
          <p>Invoice ID: 12345</p>
          <p>Customer Name: John Doe</p>
          <p>Invoice Amount: 12345</p>
          <div className="card-actions justify-end">
            <button className="btn">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
