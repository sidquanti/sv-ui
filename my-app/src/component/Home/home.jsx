import React from "react";
import LibraryList from "../LibraryList/libraryLists";
import Slide from "./slide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FooterContainer  from "./footerComponent";

function Home(props) {

  const {userProfile={},userEnrollmentList=[],selectedCityId}=props;
  
  return (
    <>
    <div >
      <Slide/>
      </div>
      <div style={{textAlign:'center',color:'#1976d2'}}>
      <h1>Welcome to Study Venue</h1>
      <h2 textAlign = 'center'>Explore Library in your City</h2>
      </div>
    </>    
  );
}
export default Home;
