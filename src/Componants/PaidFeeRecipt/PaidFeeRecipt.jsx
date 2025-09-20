import React, { useState } from "react";
import "./PaidFeeRecipt.css"

function PaidFeeRecipt() {


  return (
    <div>
      <div className="container1">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">My Account</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Paid Fee Recipt
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row text-start">
          <div className="col">
            <h3 className="fw-bold">Paid Fee Recipt
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col table-responsive">
            <table class="table table-striped table-borderless">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col ">Recipt Number</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4/25/2022</td>
                  <td>1156489</td>
                  <td>$36.76</td>
                  <td>Complete</td>
                  <td>Card</td>
                </tr>
                <tr>
                  <td>4/25/2022</td>
                  <td>1156489</td>
                  <td>$36.76</td>
                  <td>Processing</td>
                  <td>Cheque</td>
                </tr>
                <tr>
                  <td>4/25/2022</td>
                  <td>1156489</td>
                  <td>$36.76</td>
                  <td>Paid</td>
                  <td>NEFT</td>
                </tr>



              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PaidFeeRecipt;
