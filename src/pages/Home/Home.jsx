import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Home.css";
import { CategoryLocationSelector } from "./Components/CategoryLocationSelector";
import { HomeHeader } from "./Components/HomeHeader";
import { Header } from "../../components/Header/Header";
import { L } from "./Utils";
import { FindC } from "../../API/C/FindC";

const Home = () => {
  const c = FindC();
  const { slug } = useParams();
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
      navigate("/home");
    } else {
      navigate("*");
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="Home_categoryselector">
          <CategoryLocationSelector defaultLocation={slug} />
        </div>
        <HomeHeader />
      </div>
      {L.includes(slug) ? (
        <div className="Category_area">
          <h1>Categories</h1>
          <div className="Home_Category">
            {c.map((c) =>
              c.locations.includes(slug) ? (
                <div className="Home_Category_Div" key={c.name}>
                  <Link style={{textDecoration: 'none'}} to={`/${slug}/${c.name}`}>
                    <img
                      className="Home_Category_Div_Img"
                      src={c.img}
                      alt={c.name}
                    />
                    <div className="Service_Bottom">
                      <p className="Home_Category_Div_text">{c.name}</p>
                      <button>
                        SCHEDULE
                      </button>
                    </div>
                  </Link>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      ) : (
        <>Soon we will be at this location</>
      )}
    </>
  );
};

export default Home;
