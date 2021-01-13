import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div>
          <div className="card-img-wrapper">
            <img className="img" src={props.img} />
          </div>
          <div className="card-title">{props.title}</div>
        </div>
        <div className="card-button-wrapper">
          <Link to={props.nav} style={{ textDecoration: "none" }}>
            <div className="button">Play</div>
          </Link>
        </div>
      </div>

      {/* <div className="home-banner-wrapper">
        <div className="home-banner">
          <div className="home-banner-text">Hello! I am Denys</div>
        </div>
      </div>
      <div className="home-content">
        <Link to="/guessSmth">Guess</Link>
      </div> */}
    </div>
  );
};
