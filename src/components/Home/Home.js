import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Card } from "../../share/Card/Card";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-banner-wrapper">
        <div
          className="home-banner"
          style={{
            backgroundImage: `url("https://www.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png")`,
          }}
        >
          <div className="home-banner-text">
            <div>Hello! I am Denys</div>
            <div>It is my pet project</div>
          </div>
        </div>
      </div>
      <div className="home-content">
        <Card
          title="Guess number"
          nav="/guess-number"
          img="https://content.instructables.com/ORIG/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?frame=1"
        />
        <Card
          title="Delete char"
          nav="/delete-char"
          img="https://cdn.thewirecutter.com/wp-content/uploads/2020/08/20200818_delete-630-630x420.jpg"
        />
        {/* <Link to="/guess-smth/56">Guess</Link> */}
      </div>
    </div>
  );
};
