import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosAirplane } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { CgGames } from "react-icons/cg";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Samuel Hernadez </span>
            I'm from <span className="purple"> Springfield, Massachusets</span>
            <br />
            I'm currently pursing my Bachelor degree at UMass Amherst.
            <br />
            I got my associates degree from Springfield Technical Community College in 2023
            <br />
           
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            <CgGames /> Playing Games
            </li>
            <li className="about-activity">
            <MdLocalMovies />Watch Movies
            </li>
            <li className="about-activity">
            <IoIosAirplane /> Travel
            </li>
          </ul>

          
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
