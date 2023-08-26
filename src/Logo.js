import React from "react";

const Logo = ({ image, altText, linkTo }) => {
  return (
    <div className="character-button">
      <a href={linkTo}>
        <img
          src={image}
          alt={altText}
          className="logo"
          style={{ maxWidth: "200%" }}
        />
      </a>
    </div>
  );
};

export default Logo;
