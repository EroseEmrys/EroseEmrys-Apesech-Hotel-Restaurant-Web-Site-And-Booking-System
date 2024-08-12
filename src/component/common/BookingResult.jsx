import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns"; // Use if date formatting is needed

const BookingResult = ({ bookingSearchResults }) => {
  return (
    <div className="booking-results">
      {bookingSearchResults.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookingSearchResults.map((booking) => (
          <div key={booking.id} className="booking-result-item">
            <p>Room ID: {booking.roomId}</p>
            <p>User ID: {booking.userId}</p>
            <p>
              Start Date: {format(new Date(booking.startDate), "MM/dd/yyyy")}
            </p>
            <p>End Date: {format(new Date(booking.endDate), "MM/dd/yyyy")}</p>
            <p>Status: {booking.status}</p>
            <Link
              to={`/admin/edit-booking/${booking.id}`}
              className="edit-link"
            >
              Edit
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingResult;
