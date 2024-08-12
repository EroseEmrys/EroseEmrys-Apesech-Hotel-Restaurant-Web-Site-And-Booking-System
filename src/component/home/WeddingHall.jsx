import React from "react";

// Define the WeddingHall component
const WeddingHall = () => {
  // Function to handle clicking the "Call Us to Book" button
  const handleCall = () => {
    alert("Please call us to book our wedding hall.");
  };

  // Return the JSX for the WeddingHall component
  return (
    <div className="wedding-hall">
      <h2 className="wedding-hall__title">
        Step into Elegance: Our Wedding Halls 💖
      </h2>{" "}
      {/* Title for the section */}
      {/* Options for different wedding hall types */}
      <div className="wedding-hall__options">
        {/* Option for AC Hall */}
        <div className="wedding-hall__option">
          <img
            src="/assets/images/ac-hall.jpg"
            alt="AC Hall"
            className="wedding-hall__image"
          />{" "}
          {/* Image for AC Hall */}
          <h3 className="wedding-hall__option-title">AC Hall</h3>{" "}
          {/* Title for AC Hall */}
          <p className="wedding-hall__option-description">
            Spacious and air-conditioned hall for a comfortable experience.
          </p>{" "}
          {/* Description of AC Hall */}
          <button className="wedding-hall__book-button" onClick={handleCall}>
            Call Us to Book
          </button>{" "}
          {/* Button to call for booking */}
        </div>

        {/* Option for Non-AC Hall */}
        <div className="wedding-hall__option">
          <img
            src="/assets/images/non-ac-hall.jpg"
            alt="Non-AC Hall"
            className="wedding-hall__image"
          />{" "}
          {/* Image for Non-AC Hall */}
          <h3 className="wedding-hall__option-title">Non-AC Hall</h3>{" "}
          {/* Title for Non-AC Hall */}
          <p className="wedding-hall__option-description">
            Traditional hall with natural ventilation.
          </p>{" "}
          {/* Description of Non-AC Hall */}
          <button className="wedding-hall__book-button" onClick={handleCall}>
            Call Us to Book
          </button>{" "}
          {/* Button to call for booking */}
        </div>
      </div>
    </div>
  );
};

export default WeddingHall; // Export the WeddingHall component
