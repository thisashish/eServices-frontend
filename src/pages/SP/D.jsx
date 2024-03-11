import React, { useEffect, useState } from "react";
import Account from "../SPD/Account";
/* ICONS */
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdAccountBalanceWallet , MdLeaderboard } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
/* ICONS end */
import ServiceOption from "../SPD/ServiceOption";
import MyEarnings from "../SPD/MyEarnings";
import Lead from "../SPD/Lead";
import Address from "../SPD/Address";
import Analytics from "../SPD/Analytics";
import { PartnerProfile } from "../SPD/PartnerProfile";
import { ShowProfile } from "../SPD/ShowProfile";
import axios from "axios";
import UploadProfilePic from "../SPD/UploadProfilePic";



import CSS from "./D.css"

export const D = () => {
  
  const [SPdata, setSPdata] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  useEffect(() => {
    const findspdata = async () => {
      const res = await axios.get("/SP/find/one", {
        withCredentials: true,
        headers: {
          Accept: "application.json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      setSPdata(res.data);
    };
    findspdata();
  }, []);
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };
  const handleLogout = async () => {
    const res = await axios.get("/SP/add/logout", {
      withCredentials: true,
      headers: {
        Accept: "application.json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    if (res.data === "Success") {
      window.location.href = "/";
    } else {
    }
  };

  return (

    <div className="Dbody">
      <div className="page-header">
        <h1 className="admin-name" >hii {SPdata.name}</h1>
        <button className="log-out-button" onClick={handleLogout}>Logout</button>
      </div>  
      <PartnerProfile />
      {/* <ShowProfile /> */}
      

      <div className="service-options-style">
        <div className="service-option">
          <div className="service">
            <FaMoneyBillTrendUp className="option-icon"/>
            <ServiceOption
              title="Earning"
              onClick={() => handleServiceClick("MyEarnings")}
            />
          </div>
        </div>

        <div className="service-option">
          <div className="service">
            <MdAccountBalanceWallet className="option-icon"/>
            <ServiceOption
              title="Account"
              onClick={() => handleServiceClick("Account")}
            />
          </div>
        </div>

        <div className="service-option">
          <div className="service">
            <MdLeaderboard className="option-icon"/>
            <ServiceOption 
              title="Lead" 
              onClick={() => handleServiceClick("Lead")} 
            />
          </div>
          </div>

        <div className="service-option">
          <div className="service">
            <IoAnalytics className="option-icon"/>
            <ServiceOption
              title="Analytics"
              onClick={() => handleServiceClick("Analytics")}
            />
          </div>
        </div>

        <div className="service-option">
          <div className="service">
            <FaRegAddressCard className="option-icon"/>
            <ServiceOption
              title="Address"
              onClick={() => handleServiceClick("Address")}
            />
          </div>
        </div>


      </div>
  
    </div>
  );
};
