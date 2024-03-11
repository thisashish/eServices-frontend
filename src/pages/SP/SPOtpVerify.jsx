import axios from "axios";
import React, { useState } from "react";

export const SPOtpVerify = (c) => {
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
    const res = await axios.post("/SP/add/verifyotp", {
      formState: c.data,
      otp: otp,
    });
    if (res.data === "success") {
      window.location.href = "/service-provider/dashboard";
    } else {
      console.log(res.data);
    }
  };
  return (
    <>
      <div>
        <input
          placeholder="enter otp"
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
