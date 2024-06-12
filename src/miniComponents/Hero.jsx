import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
          <strong>Join us in making a difference!</strong> 
          No one can whistle a symphony alone; it takes a whole orchestra to play it. 
          <strong>We rely on volunteers</strong> 
          to brighten the lives of children in need. Your time and skills can help create a supportive community. 
          <strong>Be the change today!</strong>
        </p>
        <Link to={"/donate"} className="btn">Donate Now</Link>
      </div>
      <div className="banner">
        <img src="/hero.jpg" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;