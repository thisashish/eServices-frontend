import React, { useEffect, useState } from "react";
import "./Header.css";
import { ULoginSignupPopup } from "./ULoginSignupPopup";
import axios from "axios";
import {Link,NavLink,useNavigate} from "react-router-dom"
import Profile from "../../pages/Profile/Profile";
// import Profile from "../../pages/Profile/Profile";
// import Select from "react-select"

export const Header = () => {

  const [isMenuVisible,setMenuVisible] = useState(true);
  const [loginuser, setLoginuser] = useState([]);
  let isMobile = window.innerWidth <= 768 ;


  // let his=useHistory();
  const [isPopupVisible, setPopupVisible] = useState(false);
  
  const [selected, setSelected] = useState("{loginuser.fname}");
  const navigate=useNavigate();

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  
  useEffect(() => {
    const userlogin = async () => {
      const user = await axios.get("/U/find/one", {
        withCredentials: true,
        headers: {
          Accept: "application.json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      setLoginuser(user.data);
    };
    userlogin();
    if (isPopupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupVisible]);
  const handlelogout = async () => {
    const res = await axios.get("/U/auth/logout", {
      withCredentials: true,
      headers: {
        Accept: "application.json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    

    if (res.status === 200) {
      window.location.href = "/";
    } else {
    }

  };
  function handleChange(value){
    setSelected(value);
   navigate(`${value}`);
   if (value === '/logout') {
    handlelogout();
  }
   value="";
   }
  return (
    <div className="header">
      <div className="header_left">
        <img
          src={process.env.PUBLIC_URL + "/images/image.png"}
          style={{ width: "150px", height: "80px" }}
          className="header_left_img"
        />
      </div>
      <div className="header_right">


        {isMobile ?
            <button onClick={()=>setMenuVisible(!isMenuVisible)} className="menu_button">Menu</button>
         : 
          <div>
            <a href="/service-provider/register" className="header_right_link">
              Join as Service Provider
            </a>
            <a href="/contact" className="header_right_link">
              Contact Us
            </a>
            {loginuser.length !== 0 ? (
              <>
                <p>{loginuser.fname}</p>
                <button onClick={handlelogout}>Logout</button>
              </>
            ) : (
              <button 
                className="header_right_link"
                onClick={openPopup}
              >
                Log in
              </button>
            )}
          </div>
        }
        <div hidden={isMenuVisible} className="menu_list_area">
          <ul>
            <li>
              <a href="/service-provider/register" >
                Join as Service Provider
              </a>
            </li>
            <li>
              <a href="/contact">
                Contact Us
              </a>
            </li>
            <li>
              {loginuser.length !== 0 ? (
                <>
                  <p>{loginuser.fname}</p>
                  <button onClick={handlelogout}>Logout</button>
                </>
              ) : (
                <button 
                  onClick={openPopup}
                >
                  Log in
                </button>
              )}
            </li>
          </ul>
          {isPopupVisible && <ULoginSignupPopup onClose={closePopup} />}
        </div>

        <a href="/service-provider/register" className="header_right_link">
          Join as Service Provider
        </a>
        <a href="/contact" className="header_right_link">
          Contact Us
        </a>
        
        {loginuser.length !== 0 ? (
          <> 
          {/* <Link to="/profile">{loginuser.fname}</Link> */}
            <select  value={selected} onChange={(e)=>handleChange(e.target.value)}>
             <option value ="/profile">{loginuser.fname}</option>
              <option value="/more">More</option>
              <option value="/profile">
                About</option>
                <option value="/logout">
                logout</option>

                
                
            </select>
            {selected=="{loginuser.fname}"?<NavLink to="/profile"></NavLink>:""}
            {/* <button onClick={handlelogout}>Logout</button> */}
            
          </>
        ) : (
          <button className="header_right_link" onClick={openPopup}>
            Log in
          </button>
        )}
        {isPopupVisible && <ULoginSignupPopup onClose={closePopup} />}

        {/* <Auth /> */}
      </div>
    </div>
  );
};
