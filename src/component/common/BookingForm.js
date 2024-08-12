import React, { useState } from "react";

const BookingForm = ({ onClose }) => {
  return (
    <div className="booking-container">
      <form>
        <div className="booking-row">
          <div className="booking-col">
            <h3 className="booking-title">Billing Address</h3>

            <div className="booking-inputBox">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="booking-inputBox">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="booking-inputBox">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                placeholder="Enter address"
                required
              />
            </div>

            <div className="booking-inputBox">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" placeholder="Enter city" required />
            </div>

            <div className="booking-flex">
              <div className="booking-inputBox">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  placeholder="Enter state"
                  required
                />
              </div>

              <div className="booking-inputBox">
                <label htmlFor="zip">Zip Code:</label>
                <input type="number" id="zip" placeholder="123 456" required />
              </div>
            </div>
          </div>

          <div className="booking-col">
            <h3 className="booking-title">Payment</h3>

            <div className="booking-inputBox">
              <label htmlFor="cardName">Card Accepted:</label>
              <img
                src="https://i.ibb.co/X38b5PF/card-img.png"
                alt="Card Accepted"
              />
            </div>

            <div className="booking-inputBox">
              <label htmlFor="cardName">Name On Card:</label>
              <input
                type="text"
                id="cardName"
                placeholder="Enter card name"
                required
              />
            </div>

            <div className="booking-inputBox">
              <label htmlFor="cardNum">Credit Card Number:</label>
              <input
                type="text"
                id="cardNum"
                placeholder="1111-2222-3333-4444"
                maxLength="19"
                required
              />
            </div>

            <div className="booking-inputBox">
              <label htmlFor="expMonth">Exp Month:</label>
              <select id="expMonth" required>
                <option value="">Choose month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div className="booking-flex">
              <div className="booking-inputBox">
                <label htmlFor="expYear">Exp Year:</label>
                <select id="expYear" required>
                  <option value="">Choose Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>

              <div className="booking-inputBox">
                <label htmlFor="cvv">CVV:</label>
                <input type="number" id="cvv" placeholder="1234" required />
              </div>
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Proceed to Checkout"
          className="booking-submit_btn"
          onClick={onClose}
        />
      </form>
    </div>
  );
};

export default BookingForm;
