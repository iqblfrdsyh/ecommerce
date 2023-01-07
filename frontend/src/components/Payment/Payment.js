import React from "react";

const Payment = () => {
  return (
    <div className="payment card p-5">
      <div className="d-flex justify-content-between">
        <h5 className="mt-2 fw-bold">Bills And utility</h5>
        <button className="btn" style={{ border: "1px solid grey" }}>
          See All
        </button>
      </div>
      <div
        className="d-flex mt-4 text-secondary justify-content-between "
        style={{ borderBottom: "1px solid #E2E2E2" }}
      >
        <p>Balance</p>
        <p>Top Up</p>
        <p>Internet</p>
        <p>Electrictiy Token</p>
        <p>Tickets</p>
        <p>Data Package</p>
        <p>Pulse</p>
        <p>Voucher</p>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex flex-column">
          <label className="my-2" htmlFor="code">
            Code Transaksi
          </label>
          <input
            className="px-3 py-3 rounded-2"
            style={{
              width: "500px",
              border: "1px solid #828282",
            }}
            type="text"
            placeholder="Ex: 276NHVF387XN3487"
          />
        </div>
        <div className="d-flex flex-column ">
          <label className="my-2" htmlFor="code">
            Jumlah Transaksi
          </label>
          <input
            className="px-3 py-3 rounded-2"
            style={{
              width: "500px",
              border: "1px solid #828282",
            }}
            type="text"
            placeholder="Ex : $100.000"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn text-white px-4"
          style={{ background: "#52057B" }}
        >
          Purchase
        </button>
        <p className="mt-3">
          <img src="assets/payment/helpIcon.png" alt="" /> Help
        </p>
      </div>
    </div>
  );
};

export default Payment;
