import React, { useState } from "react";
import "./ULoginSignupPopup.css";
import { ULogin } from "./ULogin";
import { USignup } from "./USignup";

export const ULoginSignupPopup = ({ onClose }) => {
  const [ULoginPopup, setULoginPopup] = useState(true);
  const toggleULoginPopup = () => {
    setULoginPopup(ULoginPopup ? false : true);
  };
  return (
    <>
      <div className="ULoginSignupPopup">
        {ULoginPopup ? (
          <ULogin toggleULoginPopup={toggleULoginPopup} />
        ) : (
          <USignup toggleULoginPopup={toggleULoginPopup} />
        )}
      </div>
      <button onClick={onClose}>Close</button>
    </>
  );
};
