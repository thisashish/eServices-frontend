import React, { useState, useRef, useEffect } from "react";
import { categories, L } from "../Utils";
import "./CategoryLocationSelector.css";
import "./CategoryLocationBox.css";
import { FindC } from "../../../API/C/FindC";

import { IoSearchCircle } from "react-icons/io5"; // ICON

export const CategoryLocationSelector = (c) => {
  const categories = FindC();
  const [locationopen, setLocationopen] = useState(
    c.defaultLocation === undefined ? true : false
  );
  const locationDivRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        locationDivRef.current &&
        !locationDivRef.current.contains(e.target)
      ) {
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
              defaultValue={c.defaultLocation}
              onChange={() => setLocationopen(true)}
            />
            {locationopen ? (
              <div
                className="CategoryLocationSelector_location_div"
                ref={locationDivRef}
              >
                {L.map((location) => (
                  <div
                    key={location}
                    className="CategoryLocationSelector_location_option"
                    onClick={() => {
                      //window.location.href = location;
                      setLocationopen(false);
                    }}
                  >
                    {location}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="category_box">
          <label className="CategoryLocationSelector_location_label">Category</label>
          <select
            id="category-select"
            className="category-select"
            onChange={(e) =>
              (window.location.href =
                c.defaultLocation + "/" + e.target.value)
            }
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
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