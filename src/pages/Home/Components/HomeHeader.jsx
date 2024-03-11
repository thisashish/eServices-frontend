import React, { useState, useEffect } from "react";
import "./HomeHeader.css"; // Import your CSS for styling
import { images } from "../Utils";

export const HomeHeader = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide configuration
  const autoSlideInterval = 2000; // Adjust the interval in milliseconds (e.g., 5000ms = 5 seconds)

  useEffect(() => {
    const autoSlideTimer = setInterval(nextImage, autoSlideInterval);

    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [currentImage]);

  return (
    <div className="slider-container">
      <button onClick={prevImage} className="slider-button left">
        &lt;
      </button>
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="slider-image"
      />
      <button onClick={nextImage} className="slider-button right">
        &gt;
      </button>
    </div>
  );
};
