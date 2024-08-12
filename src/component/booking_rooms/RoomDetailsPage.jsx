import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService"; // Assuming your service is in a file called ApiService.js
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Make sure this is uncommented

const RoomDetailsPage = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGuests, setTotalGuests] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [userId, setUserId] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await ApiService.getRoomById(roomId);
        setRoomDetails(response.room);
        const userProfile = await ApiService.getUserProfile();
        setUserId(userProfile.user.id);
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [roomId]);

  const handleConfirmBooking = () => {
    if (!checkInDate || !checkOutDate) {
      setErrorMessage("Please select check-in and check-out dates.");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    if (
      isNaN(numAdults) ||
      numAdults < 1 ||
      isNaN(numChildren) ||
      numChildren < 0
    ) {
      setErrorMessage("Please enter valid numbers for adults and children.");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const totalDays =
      Math.round(
        Math.abs((new Date(checkOutDate) - new Date(checkInDate)) / oneDay)
      ) + 1;

    setTotalPrice(roomDetails.roomPrice * totalDays);
    setTotalGuests(numAdults + numChildren);
  };

  const acceptBooking = async () => {
    try {
      const formattedCheckInDate = new Date(checkInDate)
        .toISOString()
        .split("T")[0];
      const formattedCheckOutDate = new Date(checkOutDate)
        .toISOString()
        .split("T")[0];

      const booking = {
        checkInDate: formattedCheckInDate,
        checkOutDate: formattedCheckOutDate,
        numOfAdults: numAdults,
        numOfChildren: numChildren,
      };

      const response = await ApiService.bookRoom(roomId, userId, booking);
      if (response.statusCode === 200) {
        setConfirmationCode(response.bookingConfirmationCode);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          navigate("/rooms");
        }, 10000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || error.message);
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  if (isLoading) {
    return <p className="room-detail-loading">Loading room details...</p>;
  }

  if (error) {
    return <p className="room-detail-loading">{error}</p>;
  }

  if (!roomDetails) {
    return <p className="room-detail-loading">Room not found.</p>;
  }

  const { roomType, roomPrice, roomPhotoUrl, description, bookings } =
    roomDetails;

  return (
    <div className="room-details-booking">
      {showMessage && (
        <p className="booking-success-message">
          Booking successful! Confirmation code: {confirmationCode}. An SMS and
          email of your booking details have been sent to you.
        </p>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <h2>Room Details</h2>
      <br />
      <img src={roomPhotoUrl} alt={roomType} className="room-details-image" />
      <div className="room-details-info">
        <h3>{roomType}</h3>
        <p>Price: ${roomPrice} / night</p>
        <p>{description}</p>
      </div>
      {bookings && bookings.length > 0 && (
        <div>
          <h3>Existing Booking Details</h3>
          <ul className="booking-list">
            {bookings.map((booking, index) => (
              <li key={booking.id} className="booking-item">
                <span className="booking-number">Booking {index + 1} </span>
                <span className="booking-text">
                  Check-in: {booking.checkInDate}{" "}
                </span>
                <span className="booking-text">
                  Out: {booking.checkOutDate}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="booking-info">
        <button
          className="book-now-button"
          onClick={() => setShowDatePicker(true)}
        >
          Book Now
        </button>
        <button
          className="go-back-button"
          onClick={() => setShowDatePicker(false)}
        >
          Go Back
        </button>
        {showDatePicker && (
          <div className="date-picker-container">
            <DatePicker
              className="detail-search-field"
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              placeholderText="Check-in Date"
              dateFormat="dd/MM/yyyy"
            />
            <DatePicker
              className="detail-search-field"
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate}
              placeholderText="Check-out Date"
              dateFormat="dd/MM/yyyy"
            />
            <div className="guest-container">
              <div className="guest-div">
                <label>Adults:</label>
                <input
                  type="number"
                  min="1"
                  value={numAdults}
                  onChange={(e) => setNumAdults(parseInt(e.target.value))}
                />
              </div>
              <div className="guest-div">
                <label>Children:</label>
                <input
                  type="number"
                  min="0"
                  value={numChildren}
                  onChange={(e) => setNumChildren(parseInt(e.target.value))}
                />
              </div>
              <button
                className="confirm-booking"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
        {totalPrice > 0 && (
          <div className="total-price">
            <p>Total Price: ${totalPrice}</p>
            <p>Total Guests: {totalGuests}</p>
            <button onClick={acceptBooking} className="accept-booking">
              Accept Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomDetailsPage;
