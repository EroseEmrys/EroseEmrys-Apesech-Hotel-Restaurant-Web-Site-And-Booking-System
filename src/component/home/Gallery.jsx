import React, { useEffect, useState, useCallback } from "react";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [
    "/assets/images/1.jpg",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/4.jpg",
    "/assets/images/2.jpeg",
    "/assets/images/IMG-20240428-WA0037.jpg",
    "/assets/images/3.jpeg",
    "/assets/images/6.jpg",
  ];

  // Function to update current index
  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Increment index cyclically
  }, [images.length]);

  // Effect to update index with a 7-second interval
  useEffect(() => {
    const interval = setInterval(updateIndex, 7000);
    return () => clearInterval(interval);
  }, [updateIndex]); // Add updateIndex to the dependency array

  return (
    <div className="gallery__background">
      {/* Section header */}
      <h2 className="gallery__header">
        Step into our haven of luxury and comfort, where every detail is
        designed to exceed your expectations.
      </h2>
      {/* Photo collage */}
      <div className="gallery__collage">
        {/* Mapping over the images array to render each image */}
        {images.map((image, index) => (
          <img
            key={index} // Key is set to index, but better to use a unique identifier if available
            className={`gallery__photo ${
              index === currentIndex ? "gallery__photo--active" : ""
            }`} // Conditionally apply 'gallery__photo--active' class based on currentIndex
            src={image} // Image source
            alt={`Gallery image ${index + 1}`} // Updated alt text for accessibility
          />
        ))}
      </div>
    </div>
  );
}
