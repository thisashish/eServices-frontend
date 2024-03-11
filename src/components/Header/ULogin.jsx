import React, { useState } from "react";
import "./ULogin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
export const ULogin = ({ toggleULoginPopup }) => {
  const [passhow, setPassShow] = useState(false);
  const [inputdata, setInputdata] = useState({
    email: "",
    password: "",
  });

  // setinputvalue
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };
  const handleSubmit = async (e) => {
    console.log(inputdata);
    e.preventDefault();
    const { email, password } = inputdata;

    if (email === "") {
      console.log("Enter Your Email");
    } else if (!email.includes("@")) {
      console.log("Enter Valid Email");
    } else if (password === "") {
      console.log("Enter Your Password");
    } else if (password.length < 6) {
      console.log("password length minimum 6 character");
    } else {
      const res = await axios.post("/U/auth/login", { inputdata });

      if (res.data === "success") {
        window.location.href = "/";
      } else {
        console.log("not login");
      }
    }
  };
  return (
    <>
      <div className="ulogin">
           <h1>Log In</h1>
           <p>Please login to continue</p>
            <div className="input-box">
              <input
               className="ULogin_form_input"
                type="email"
                 name="email"
                onChange={handleChange}
                  placeholder="Enter Your Email"
              />
            </div>
            <div className="ULogin_form_password">
                <input
                  className="ULogin_form_input"
                  name="password"
                   type={!passhow ? "password" : "text"}
                    onChange={handleChange}
                  placeholder="Enter Your password"
                  />
              <div
              className="ULogin_showpass"
              onClick={() => setPassShow(!passhow)}
              >
                {!passhow ? (
                 <FaEye className="ULogin_form_password_showpass_eye" />
                 ) : (
                   <FaEyeSlash className="ULogin_form_password_showpass_eye" />
                 )}{" "}
               </div>
             </div>
          <button className="ULogin_btn" onClick={handleSubmit}>
               Login
          </button>
          <div class="register-link">
              <p>
                Don't have account ? 
                <a
                  href="#"
                  onClick={() => {
                  toggleULoginPopup();
                      }}
                 >
                Sign up
                </a>
               </p>
          </div>
      </div>
    </>
  );
};
