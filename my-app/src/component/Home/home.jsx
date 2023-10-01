import React from "react";
import LibraryList from "../LibraryList/libraryLists";
import Slide from "./slide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FooterContainer  from "./footerComponent";
import f1 from "../../data/f1.jpg";
import f2 from "../../data/f2.jpg";
import f3 from "../../data/f3.jpg";
import "./slide.css";

function Home(props) {

  const {userProfile={},userEnrollmentList=[],selectedCityId}=props;
  
  return (
    <>
    <div >
      <Slide/>
      </div>
      <div style={{textAlign:'center',color:'#1976d2'}}>
      <h1>Welcome to Study Venue</h1>
    </div>
    <section id="features" class="features">
        <div class="container">
            <h1>Our Features</h1>
            <div class="features-row">
                <div class="feature">
                    <img src={f1} alt="Feature 1"/>
                    <h3>Wide Network</h3>
                    <p>Access a wide network of co-study centers and libraries to choose from.</p>
                </div>
                <div class="feature">
                    <img src={f2} alt="Feature 2"/>
                    <h3>Select And Book</h3>
                    <p>Select and book your choice of seat from the comfort of your home.</p>
                </div>
                <div class="feature">
                    <img src={f3} alt="Feature 3"/>
                    <h3>User Reviews</h3>
                    <p>Read reviews from other users to make informed decisions.</p>
                </div>
            </div>
        </div>
    </section>
    </>    
  );
}
export default Home;
