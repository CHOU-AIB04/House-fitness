import "./Product.css";
import Product_info from "./Product_info";
import React, { useState } from "react";

export default function Product(props) {
  const [display, setDisplay] = useState(Product_info);
 let [color , setcolor] = useState("grey")
  const Handleenter = (id) => {
    setDisplay((prevDisplay) =>
      prevDisplay.map((product) =>
        product.id === id
          ? { ...product, dis: product.dis === "none" ? "block" : "none" }
          : product
      )
    );
  };
  const Handleleave = (id) => {
    setDisplay((prevDisplay) =>
      prevDisplay.map((product) =>
        product.id === id
          ?{ ...product, dis: product.dis === "none" ? "block" : "none", transition : product.transition === "0" ? "0.5s" : "0" } 
          : product
      )
    );
  };
  let navs = Product_info.map(function (product, index) {
    return (
      <nav id="product" onMouseEnter={() => Handleenter(product.id)} onMouseLeave ={() => Handleleave(product.id)} style = {{backgroundColor : props.background}} >
        <div id="img--container">
          <img src={product.src} loading="lazy" alt={`product ${index}`} />
        </div>
        <div id="product_detail">
          <h1>{product.tittle}</h1>
          <div id="detail">
            <p id="para" style={{ display: display[index].dis, transition : display[index].transition }}>{product.des}</p>
            <h2>
              {product.price} / <span>{product.fake_price}</span>
            </h2>
            <div id="review">
              <p>({product.review}) reviews</p>
              <div id="stars">
                <i className="fas fa-star" style={{ color: "yellow" }}></i>
                <i className="fas fa-star" style={{ color: "yellow" }}></i>
                <i className="fas fa-star" style={{ color: "yellow" }}></i>
                <i className="fas fa-star" style={{ color: "yellow" }}></i>
                <i className="fas fa-star" style={{ color: "yellow" }}></i>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" style={{backgroundColor : color}} key={index} id={`btn ${product.id}`}>
        <i class="bi bi-bag-fill"></i>  Shop Now
        </button>
      </nav>
    );
  });

  return (
    <article id="products" >
      <h1 id="tittle" style={{color : props.color}}>Trending Product</h1>
      <section>{navs}</section>
    </article>
  );
}
