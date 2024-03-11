import React, { useState, useRef, useEffect } from "react";
import { L } from "../Utils";
import "./CategoryLocationSelector.css";
import "./CategoryLocationBox.css";
import { FindC } from "../../../API/C/FindC";

import { IoSearchCircle } from "react-icons/io5";

export const CategoryLocationSelector = ({ defaultLocation }) => { // Use object destructuring to get defaultLocation
  const categoriesData = FindC(); // Rename to avoid shadowing the imported categories array
  const [locationOpen, setLocationOpen] = useState(defaultLocation === undefined ? true : false);
  const locationDivRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (locationDivRef.current && !locationDivRef.current.contains(e.target)) {
        window.location.href = "/lakhimpur";
      }
    };

    // Add a click event listener to the document
    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Remove the click event listener when the component unmounts
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="category_location_box">
        <div className="CategoryLocationSelector_location">
          <label className="CategoryLocationSelector_location_label">
            Location
          </label>
          <div>
            <input
              placeholder="Select Your Location"
              className="CategoryLocationSelector_location_input"
              defaultValue={defaultLocation}
              onChange={() => setLocationOpen(true)}
            />
            {locationOpen && (
              <div className="CategoryLocationSelector_location_div" ref={locationDivRef}>
                {L.map((location) => (
                  <div
                    key={location}
                    className="CategoryLocationSelector_location_option"
                    onClick={() => setLocationOpen(false)}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="category_box">
          <label className="CategoryLocationSelector_location_label">Category</label>
          <select
            id="category-select"
            className="category-select"
            onChange={(e) => (window.location.href = defaultLocation + "/" + e.target.value)}
          >
            <option value="">Select a category</option>
            {categoriesData.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
      </div>
    </>
  );
};
