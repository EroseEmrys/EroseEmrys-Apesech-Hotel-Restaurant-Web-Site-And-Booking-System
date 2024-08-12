import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState([]);

  // Function to handle search results
  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };

  return (
    <div className="home">
      {/* HEADER / BANNER ROOM SECTION */}
      <section>
        <header className="header-banner">
          <img
            src="./assets/images/hotel.jpg"
            alt="Phegon Hotel"
            className="header-image"
          />
          <div className="overlay"></div>
          <div className="animated-texts overlay-content">
            <h1>
              Welcome to{" "}
              <span className="phegon-color">Apesech Hotel Restaurant</span>
            </h1>
            <br />

            <h3>Welcome to your cozy haven, your new home away from home.</h3>
          </div>
        </header>
      </section>

      {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
      <RoomSearch handleSearchResult={handleSearchResult} />
      <RoomResult roomSearchResults={roomSearchResults} />

      <h2 className="home-services">
        Services at{" "}
        <span className="phegon-color">Apesech Hotel Restaurant</span>
      </h2>

      {/* SERVICES SECTION */}
      <section className="service-section">
        <div className="service-card">
          <img src="./assets/images/ac.png" alt="Air Conditioning" />
          <div className="service-details">
            <h3 className="service-title">Air Conditioning</h3>
            <p className="service-description">
              Stay cool and comfortable throughout your stay with our
              individually controlled in-room air conditioning.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
          <div className="service-details">
            <h3 className="service-title">Restaurant</h3>
            <p className="service-description">
              Indulge in a delightful selection of dishes available at our
              restaurant, with an additional cost. We hope you have a wonderful
              dining experience with us!
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/parking.png" alt="Parking" />
          <div className="service-details">
            <h3 className="service-title">Parking</h3>
            <p className="service-description">
              We offer on-site parking for your convenience . Please inquire
              about valet parking options if available.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/wifi.png" alt="WiFi" />
          <div className="service-details">
            <h3 className="service-title">WiFi</h3>
            <p className="service-description">
              Stay connected throughout your stay with complimentary high-speed
              Wi-Fi access available in all guest rooms and public areas.
            </p>
          </div>
        </div>
      </section>
      {/* AVAILABLE ROOMS SECTION */}
      <section></section>
    </div>
  );
};

export default HomePage;
