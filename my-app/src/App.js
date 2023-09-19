import axios from "axios";
import Home from "./component/Home/home";
import MoreServices from "./component/MoreServices/moreServices";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import PrimarySearchAppBar from "./component/Home/header";
import { useState } from "react";
import Library from "./component/library/library";
import EnrollmentLibrary from "./component/enrollment-library/enrolllment-library";
// import './App.css';

function App() {
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [userProfile, setUserProfile] = useState([]);
  const [userEnrollmentList, setUserEnrollmentList] = useState([]);
  const [libraryEnrollmentList, setLibraryEnrollmentList] = useState([]);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLibraryId,setSelectedLibraryId]=useState("");
 

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
        `http://localhost:8080/enrollment/users`,
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
        `http://localhost:8080/user/profile`,
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
      />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home
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
          />}></Route>
          <Route exact path="/more-services" element={<MoreServices />}></Route>
          <Route exact path="/library" element={<Library setSelectedLibraryId={setSelectedLibraryId} />}></Route>
          <Route
            exact
            path="/library-enrollment"
            element={<EnrollmentLibrary selectedLibraryId={selectedLibraryId} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
