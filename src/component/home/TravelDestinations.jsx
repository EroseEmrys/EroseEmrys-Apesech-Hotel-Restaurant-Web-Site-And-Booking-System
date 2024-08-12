import React from "react";

export default function TravelDestinations() {
  return (
    <div className="destination-container">
      <h1 className="destination-title">Discover Nearby Travel Destinations</h1>
      <br />
      <div className="destination-list">
        {/* Destination 1 */}
        <div className="destination-item">
          <img src="\assets\images\sembu.jpg" alt="Sembuwatta Lake" />
          <div className="destination-info">
            <h3>Sembuwatta Lake</h3>
            <p>
              A shimmering jewel nestled amid emerald hills, offering a serene
              escape and ethereal beauty of Mother Sri Lanka.
            </p>
          </div>
        </div>
        {/* Destination 2 */}
        <div className="destination-item">
          <img
            src="/assets/images/Aluvihare Rock Temple in Matale, Sri Lanka.jpeg"
            alt="Aluvihare Rock Temple"
          />
          <div className="destination-info">
            <h3>Aluvihare Rock Temple</h3>
            <p>
              Step into the ancient echoes of history, where sacred caves hold
              tales of spirituality and enlightenment.
            </p>
          </div>
        </div>
        {/* Destination 3 */}
        <div className="destination-item">
          <img
            src="\assets\images\3128390789_675fa3f596_o.jpg"
            alt="Knuckles Mountain Range"
          />
          <div className="destination-info">
            <h3>Knuckles Mountain Range</h3>
            <p>
              An emerald crown of biodiversity, where misty peaks and lush
              forests invite you to explore the wonders of nature.
            </p>
          </div>
        </div>
        {/* Destination 4 */}
        <div className="destination-item">
          <img
            src="\assets\images\27571542209_641a6fbe4e_o.jpg"
            alt="Pidurangala Rock"
          />
          <div className="destination-info">
            <h3>Pidurangala Rock</h3>
            <p>
              Rise to new heights and witness the breathtaking panorama of Sri
              Lanka's landscapes, painted in hues of dawn and dusk.
            </p>
          </div>
        </div>
        {/* Destination 5 */}
        <div className="destination-item">
          <img
            src="\assets\images\13892236_1169554789772152_4443464202222588556_n.jpg"
            alt="Riverston Peak"
          />
          <div className="destination-info">
            <h3>Riverston Peak</h3>
            <p>
              A sanctuary of tranquility and panoramic vistas, where the
              whispers of the wind carry stories of adventure and awe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
