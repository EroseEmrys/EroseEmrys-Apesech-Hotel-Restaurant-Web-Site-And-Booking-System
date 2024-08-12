import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ApiService from "../../service/ApiService";

const RoomResult = ({ roomSearchResults }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const isAdmin = ApiService.isAdmin();

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = "/assets/images/4.jpeg"; // Set the fallback image URL
  };

  return (
    <section className="room-results">
      {roomSearchResults && roomSearchResults.length > 0 && (
        <div className="room-list">
          {roomSearchResults.map((room) => (
            <div key={room.id} className="room-list-item">
              <img
                className="room-list-item-image"
                src={room.roomPhotoUrl}
                alt={room.roomType}
                onError={handleImageError} // Handle image errors
              />
              <div className="room-details">
                <h3>{room.roomType}</h3>
                <p>Price: Lkr - {room.roomPrice} / night</p>
                <p>Description: {room.roomDescription}</p>
              </div>

              <div className="book-now-div">
                {isAdmin ? (
                  <button
                    className="edit-room-button"
                    onClick={() => navigate(`/admin/edit-room/${room.id}`)} // Navigate to edit room with room ID
                  >
                    Edit Room
                  </button>
                ) : (
                  <button
                    className="book-now-button"
                    onClick={() => navigate(`/room-details-book/${room.id}`)} // Navigate to book room with room ID
                  >
                    View/Book Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RoomResult;
