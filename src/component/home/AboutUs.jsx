import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>Discover Nature's Embrace at Apesech Hotel & Restaurant.</h2>
          <p>
            Nestled in the verdant landscapes of Matale, our hotel is a
            sanctuary where lush tea plantations, majestic mountains, and
            meandering waterways converge. Immerse yourself in the soothing
            rhythm of nature while indulging in the luxurious amenities of our
            retreat. Experience the tranquil beauty of Matale, where every
            moment is a testament to Sri Lanka's breathtaking allure.
          </p>
          <a className="view-rooms-button" href="/rooms">
            Book Now
          </a>
        </div>
        <img className="about-img" src="/assets/images/422.jpeg" alt="Nature" />
      </div>
    </div>
  );
}
