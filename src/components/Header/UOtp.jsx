import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const UOtp = ({ inputdata }) => {
  const [otp, setOtp] = useState(null);
  const handleSubmit = async () => {
    const res = await axios.post("/U/auth/verifyotp", {
      otp: otp,
      userdata: inputdata,
    });
    if (res.data === "user registered") {
      window.location.href = "/";
    }else{
        console.log(res.data)
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Verify Otp</h1>
          </div>
          <form>
            <div className="form_input">
              <input
                type="number"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
            </div>
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
