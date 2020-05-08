import React from "react";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <div className="subtitle">Shop Now</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <div className="subtitle">Shop Now</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Sneakers</h1>
            <div className="subtitle">Shop Now</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Womens</h1>
            <div className="subtitle">Shop Now</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mens</h1>
            <div className="subtitle">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
