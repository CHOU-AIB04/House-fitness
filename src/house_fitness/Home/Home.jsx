import React,{useState} from "react";
import './Home.css';

export default function Home(props){

    return(
        <section id="Home" style={{backgroundColor : props.background}}>
            <div id="info">
                <h1 style={{color : props.color}}>Welcome to the House  <span style={{color : "#EBE3A0"}}>Fitness</span> </h1>
                <h2 style={{color : props.color}}>Empower your fitness journey, shop our top-tier gear today!</h2>
            </div>
            <div id="img_container">
                <img src={props.src} alt="pic" loading="lazy"/>
            </div>
        </section>
    )
}