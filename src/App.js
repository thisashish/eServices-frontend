//imp
////pkg
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
////file
import {css} from "./App.css";
import { C } from "./pages/C/C";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import { AD } from "./pages/AD/AD";
import { SPRegistration } from "./pages/SP/SPRegistration";
import { D } from "./pages/SP/D";
import { SPLogin } from "./pages/SP/SPLogin";
import UploadProfilePic from "./pages/SPD/UploadProfilePic";
import Profile from "./pages/Profile/Profile";
import More from "./pages/Profile/More";

//code
export const App = () => {
  return (
    <BrowserRouter>
      <div className="webPageBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/service-provider/register"
            element={<SPRegistration />}
          />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/more" element={<More/>}/>
          {/* <Route path="/logout" element={<Logout/>}/> */}
          <Route path="/service-provider/dashboard" element={<D />} />
          <Route path="/service-provider/login" element={<SPLogin />} />
          <Route path="/:slug" element={<Home />} />
          <Route path="/:slug/:slug" element={<C />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/admin/dashboard" element={<AD />} />
          <Route path="service/provider/profile" element={<UploadProfilePic/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};
