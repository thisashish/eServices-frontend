import { FaMoneyBillTransfer } from "react-icons/fa6"; // Icon
// PartnerProfile.js
import React, { useState } from "react";
import { ShowProfile } from "../SPD/ShowProfile";
import "./PartnerProfile.css";
import axios from "axios";

export const PartnerProfile = () =>{ 
  
  const [profile_options_visibility, set_profile_options_visibility] = useState(true)
  const openDropDown = (event)=>{
    event.preventDefault();
    set_profile_options_visibility(!profile_options_visibility)
  }

  const removeProfile=(event)=>{
    event.preventDefault();
    alert("Delete Profile")
  }

  // const updateProfile=(event)=>{
  //   event.preventDefault();
  //   alert("Update Profile")
  //   window.location.href = "http://localhost:3000/service-provider/dashboard";
  // }

  const [profileImage, setProfileImage] = useState(null);
  // ... other state and functions

  const updateProfile = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        "http://localhost:4001/service/provider",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // If upload is successful, update the profile image in the UI
        const uploadedImagePath = response.data?.img; // Assuming the server responds with the new image path
        setProfileImage(uploadedImagePath); // Update the profile image state
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  return(
  <div>
    <form
      action="http://localhost:4001/service/provider"
      method="post"
      enctype="multipart/form-data"
    >
    <div className="profile-area">
      <div onClick={openDropDown} class="circular-input">
      {profileImage ? (
            <img
              src={`http://localhost:4001/${profileImage}`}
              style={{ width: 100, height: 100 }}
              alt="Profile"
            />
          ) : (
            <span>Choose your Photo</span>

          )}
          <label htmlFor="fileInput">Choose your Photo</label>
      </div>
      
      <div className="dropDown-update-profile" hidden={profile_options_visibility}>
        <span className="file-taker"onClick={updateProfile}>Update</span>
        <input className="addcategory-image" name="img" type="file" accept="image/*" />
        {/* <input type="file"></input> */}
        <span className="file-taker" onClick={removeProfile}>Delete</span>
      </div>
    </div>
      <button className="submit-button" type="submit">
        <FaMoneyBillTransfer className="Save-Icon"/>
        <h1>Save</h1>
      </button>
    </form>
  </div>
);
}

