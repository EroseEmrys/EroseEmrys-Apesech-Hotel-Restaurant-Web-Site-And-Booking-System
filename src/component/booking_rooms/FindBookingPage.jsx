import React, { useState } from "react";
import ApiService from "../../service/ApiService";
import { format } from "date-fns";

const FindBookingPage = () => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!confirmationCode.trim()) {
      setError("Please enter a booking confirmation code");
      setTimeout(() => setError(""), 5000);
      return;
    }

    setLoading(true);
    try {
      const response = await ApiService.getBookingByConfirmationCode(
        confirmationCode
      );
      setBookingDetails(response.booking);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setTimeout(() => setError(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="find-booking-page">
      <h2>Find Booking</h2>
      <div className="search-container">
        <input
          required
          type="text"
          placeholder="Enter your booking confirmation code"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Find"}
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {bookingDetails && (
        <div className="booking-details">
          <h3>Booking Details</h3>
          <p>Confirmation Code: {bookingDetails.bookingConfirmationCode}</p>
          <p>
            Check-in Date:{" "}
            {format(new Date(bookingDetails.checkInDate), "MM/dd/yyyy")}
          </p>
          <p>
            Check-out Date:{" "}
            {format(new Date(bookingDetails.checkOutDate), "MM/dd/yyyy")}
          </p>
          <p>Number of Adults: {bookingDetails.numOfAdults}</p>
          <p>Number of Children: {bookingDetails.numOfChildren}</p>

          <br />
          <hr />
          <br />
          <h3>Booker Details</h3>
          <div>
            <p>Name: {bookingDetails.user.name}</p>
            <p>Email: {bookingDetails.user.email}</p>
            <p>Phone Number: {bookingDetails.user.phoneNumber}</p>
          </div>

          <br />
          <hr />
          <br />
          <h3>Room Details</h3>
          <div>
            <p>Room Type: {bookingDetails.room.roomType}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindBookingPage;
