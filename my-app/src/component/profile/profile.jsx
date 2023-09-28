import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import "./profile.css"; // Import your CSS file
import { Url } from "../../constant";

const Profile = (props) => {
  const [userProfile, setUserProfile] = useState({});
  const [mobileToUpdate, setMobileToUpdate] = useState(""); // State for the mobile number to update

  useEffect(() => {
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
        console.log({ response });
        setUserProfile(response.data);
        setMobileToUpdate(response.data.mobile); // Set the mobile number to update
      } catch (error) {
        console.error("Error fetching Profile:", error);
      }
    };
    handleProfile();
  }, []);

  // Function to handle mobile number update
  const handleMobileUpdate = () => {
    // Implement the logic to update the mobile number here
    console.log("Mobile updated:", mobileToUpdate);
    // You can send an API request to update the mobile number here
  };

  return (
    <div className="centered-container">
  <div className="profile-details">
    <h1>Profile Details</h1>
    <table>
      <tbody>
        <tr>
          <td><strong>Name:</strong></td>
          <td>{userProfile.name}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>{userProfile.email}</td>
        </tr>
        <tr>
          <td><strong>Mobile:</strong></td>
          {userProfile.mobile && userProfile.mobile.trim() !== "" ? (
            <td>{userProfile.mobile}</td>
          ) : (
            <td>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={mobileToUpdate}
                onChange={(e) => setMobileToUpdate(e.target.value)}
              />
              <button type="button" onClick={handleMobileUpdate}>
                Save
              </button>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  </div>
</div>
  );
};

export default Profile;
