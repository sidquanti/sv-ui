import axios from "axios";
import Home from "./component/Home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import PrimarySearchAppBar from "./component/Home/header";
import { useState } from "react";
import Library from "./component/library/library";
import EnrollmentLibrary from "./component/enrollment-library/enrolllment-library";
import Profile from "./component/profile/profile";
import Enrollment from "./component/enrollment/enrollment";
import SearchPage from "./component/search-page/search-page";
import LibraryList from "./component/LibraryList/libraryLists";
import { Url } from "./constant";
import FooterContainer from "./component/Home/footerComponent";
import MyPrivacy from "./component/privacy";

// import './App.css';

function App() {
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [userProfile, setUserProfile] = useState([]);
  const [userEnrollmentList, setUserEnrollmentList] = useState([]);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLibraryId, setSelectedLibraryId] = useState("");

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSelectCity = (cityId) => {
    setSelectedCityId(cityId);
  };

  const handleEnrollment = async () => {
    const CIT = Cookies.get("CIT");
    const config = {
      headers: {
        Authorization: CIT,
      },
    };
    try {
      const response = await axios.get(
        `${Url}/enrollment/users`,
        config
      );
      console.log({ response });
      setUserEnrollmentList(response.data);
    } catch (error) {
      console.error("Error fetching Libraries:", error);
    }
  };
  const handleProfile = async () => {
    const CIT = Cookies.get("CIT");
    const config = {
      headers: {
        Authorization: CIT,
      },
    };
    try {
      const response = await axios.get(
        `${Url}/user/profile`,
        config
      );
      setUserProfile(response.data);
    } catch (error) {
      console.error("Error fetching Libraries:", error);
    } finally {
      handleMenuClose();
    }
  };
  return (
    <div className="app-container">
      <Router>
        <PrimarySearchAppBar
          handleMenuClose={handleMenuClose}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          setMobileMoreAnchorEl={setMobileMoreAnchorEl}
          handleMobileMenuClose={handleMobileMenuClose}
          onSelectCity={handleSelectCity}
          handleEnrollment={handleEnrollment}
          handleProfile={handleProfile}
          userProfile={userProfile}
          userEnrollmentList={userEnrollmentList}
          selectedCityId={selectedCityId}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          setSelectedCityId={setSelectedCityId}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/enrollment" element={<Enrollment />}></Route>
          <Route exact path="/privacy" element={<MyPrivacy/>}></Route>
          
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/searchPage" element={<LibraryList  selectedCityId={selectedCityId} setSelectedCityId={setSelectedCityId}/>}></Route>
          <Route
            exact
            path="/library"
            element={<Library setSelectedLibraryId={setSelectedLibraryId} />}
          ></Route>
          <Route
            exact
            path="/library-enrollment"
            element={
              <EnrollmentLibrary selectedLibraryId={selectedLibraryId} />
            }
          ></Route>
        </Routes>
        <FooterContainer/>
      </Router>
    </div>
  );
}

export default App;
