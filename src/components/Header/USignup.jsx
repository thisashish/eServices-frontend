import React from "react";
import { useState } from "react";
import axios from "axios";

import "./USignup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UOtp } from "./UOtp";
export const USignup = ({ toggleULoginPopup }) => {
  const [passhow, setPassShow] = useState(false);
  const [otp, setOtp] = useState(false);

  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    password: "",
  });

  // setinputvalue
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  // register data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inputdata;

    if (fname === "") {
      console.log("Enter Your Name");
    } else if (email === "") {
      console.log("Enter Your Email");
    } else if (!email.includes("@")) {
      console.log("Enter Valid Email");
    } else if (password === "") {
      console.log("Enter Your Password");
    } else if (password.length < 6) {
      console.log("password length minimum 6 character");
    } else {
      const res = await axios.post("/U/auth/register", { inputdata });

      if (res.data === "otp sent") {
        setOtp(true);
      } else {
        console.log("email not sent");
      }
    }
  };

  return (
    <>
      {otp ? (
        <UOtp inputdata={inputdata} />
      ) : (
        <div className="USignup">
          <div className="USignup_heading">
            <h1 className="USignup_heading_h1">Sign Up</h1>
            <p className="USignup_heading_p">Lets make life easy</p>
          </div>
          <form className="USignup_form">
            <input
              className="USignup_form_input"
              name="fname"
              type="text"
              onChange={handleChange}
              placeholder="Enter Your Name"
            />
            <input
              className="USignup_form_input"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter Your Email"
            />

            <div className="USignup_form_password">
              <input
                className="USignup_form_input"
                name="password"
                type={!passhow ? "password" : "text"}
                onChange={handleChange}
                placeholder="Enter Your password"
              />
              <div className="showpass" onClick={() => setPassShow(!passhow)}>
                {!passhow ? (
                  <FaEye className="USignup_form_password_showpass_eye" />
                ) : (
                  <FaEyeSlash className="USignup_form_password_showpass_eye" />
                )}{" "}
              </div>
            </div>

            <button className="USignup_form_btn" onClick={handleSubmit}>
              Sign Up
            </button>
            <p>
              Already Signed up?{" "}
              <a
                href="#"
                onClick={() => {
                  toggleULoginPopup();
                }}
              >
                Login
              </a>
            </p>
          </form>
        </div>
      )}
    </>
  );
};
