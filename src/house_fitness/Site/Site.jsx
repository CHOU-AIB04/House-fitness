import React, { useState } from "react";
import "./Header.css";
import icon from "../img/muscles.png";
import icon2 from "../img/muscle2.png";
import Home from "../Home/Home";
import Product from "../Product/Product";
import house from '../img/black_version.png';
import wheat_house from '../img/house_logo_wheat.png'
export default function Header() {
  let [logo, setlogo] = useState(house)
  // the home state it's for changing the color for the Home content
  let [home, sethome] = useState({
    color: "black",
    src: icon2,
    site_background : "white"
  });
  // this state to change the mode from dark to white or the oposite
  let [mode, setmode] = useState({
    Mode: "bi bi-brightness-high-fill",
    position: "-5%",
    color: "grey",
    background_mode: "wheat",
  });
  // this state for changing some property in header part that contain ul and logo ...
  let [property, setproperty] = useState({
    background: "white",
    btn_background: "transparent",
    logo_name: "black",
    ul_color: "black",
  });
  // this state it's for changing product container color
  let [product_back,setproduct_back] = useState({
    background : "white",
    text_color : "black"
  })
  function Changemode() {

    setmode(function (prev) {
      return {
        ...prev,
        Mode:
          prev.Mode === "bi bi-brightness-high-fill"
            ? "bi bi-moon-fill"
            : "bi bi-brightness-high-fill",
        position: prev.position === "-5%" ? "50%" : "-5%",
        color: prev.color === "grey" ? "white" : "grey",
        background_mode: prev.background_mode === "wheat" ? "grey" : "wheat",
      };
    });
    setproperty(function (prev) {
      return {
        ...prev,
        background: prev.background === "white" ? "#54626F" : "white",
        btn_background:
          prev.btn_background === "transparent" ? "white" : "transparent",
        logo_name: prev.logo_name === "black" ? "white" : "black",
        ul_color: prev.ul_color === "black" ? "white" : "black",
      };
    });
    sethome(function (prev) {
      return {
        ...prev,
        color: prev.color === "black" ? "white" : "black",
        src: prev.src === icon2 ? icon : icon2,
        site_background : prev.site_background === "white" ? "#54626F" : "white"
      };
    });
    setproduct_back(function(prev){
      return ({
        ...prev,
        background : prev.background === "white" ? "#EBE4CE" : "white",
        text_color : prev.text_color === "black" ? "#f1f5f9" : "black"
      })
    })
    setlogo(function(prev){
      return prev === house ? wheat_house : house
    })
  }

  let links = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Slider",
    },
    {
      id: 3,
      text: "Product",
    },
    {
      id: 4,
      text: "Contact",
    },
    {
      id: 5,
      text: "More Info",
    },
  ];
  let a_element = links.map(function (e) {
    return (
      <li>
        <a
          href="#"
          id={e.id}
          className="aa"
          style={{ color: property.ul_color }}
        >
          {e.text}
        </a>
      </li>
    );
  });
  document.body.style.backgroundColor = property.background;
  document.body.style.transition = "0.5s";
  return (
    <>
      <header id="header" style={{ backgroundColor: property.background }}>
        <div>
          <img src ={logo} alt="logo" id="logo" />
          <h1 style={{ color: property.logo_name, transition: "0.5s" }}>
            House <span style={{color : "#EBE3A0"}}>Fitness</span> 
          </h1>
        </div>
        <nav>
          <ul>{a_element}</ul>
        </nav>
        <button
          type="submit"
          style={{ backgroundColor: property.btn_background }}
        >
          Sign In
        </button>
        <div
          id="mode"
          style={{ backgroundColor: mode.background_mode }}
          onClick={Changemode}
        >
          <i
            class={mode.Mode}
            style={{ left: mode.position, color: mode.color }}
          ></i>
        </div>
      </header>
      <Home color={home.color} src={home.src} />
      <Product background = {product_back.background} color = {product_back.text_color}/>
    </>
  );
}
