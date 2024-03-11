import React, { useState, useRef, useEffect } from "react";
import { L } from "../Utils";
import "./CategoryLocationSelector.css";
import "./CategoryLocationBox.css";
import { FindC } from "../../../API/C/FindC";

import { IoSearchCircle } from "react-icons/io5";

export const CategoryLocationSelector = ({ defaultLocation }) => {
  const categoriesData = FindC();
  const [locationOpen, setLocationOpen] = useState(defaultLocation === undefined ? true : false);
  const locationDivRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (locationDivRef.current && !locationDivRef.current.contains(e.target)) {
        window.location.href = "/lakhimpur";
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
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
                {Array.isArray(L) && L.map((location) => (
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
