import React from "react";

const Hero = () => {
  return (
    // <div className="container">
    <div className="hero">
      <div className="content">
        <h1>Your feet deserves the best</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="button_container">
          <button>Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div>
          <p>Also available on</p>
          <div className="logos">
            <img src="/images/flipkart_logo.png" alt="flipkart"></img>
            <img src="/images/amazon.png" alt="amazon"></img>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="images/shoe_image.png" alt="shoesimg" />
      </div>
    </div>
    // </div>
  );
};

export default Hero;
