import React, { useState, useEffect } from "react";
import axios from "axios";
import "./libraryList.css";
import { Url } from "../../constant";
// import Modal from 'react-modal'; // Import the modal library

function LibraryList({ selectedCityId,setSelectedCityId }) {
  const [libraries, setLibraries] = useState([]);
  const [cityName, setCityName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to manage the modal
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams)
  const cityId = urlParams.get("city");
  console.log({cityId})
  const selectCityId=selectedCityId||cityId;
  useEffect(() => {
    if (selectCityId) {
      async function fetchLibraries() {
        try {
          const response = await axios.get(
            `${Url}/library/city/${selectCityId}`
          );
          setLibraries(response.data);
        } catch (error) {
          console.error("Error fetching libraries:", error);
        }
      }

      fetchLibraries();
    }
  }, [selectCityId]);

  const handleEnrollClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="library-list-container">
      <h2>Libraries in your city</h2>
      <table className="library-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Opening Time</th>
            <th>Closing Time</th>
            <th>Total Capacity</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th> {/* New column for the "enroll" button */}
          </tr>
        </thead>
        <tbody>
          {libraries.length>0&&libraries.map((library) => (
            <tr key={library.id}>
              <td>{library.name}</td>
              <td>{library.address}</td>
              <td>{library.openingTime}</td>
              <td>{library.closingTime}</td>
              <td>{library.totalCapacity}</td>
              <td>{library.mobile}</td>
              <td>{library.email}</td>
              <td>{library.status}</td>
              <td>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LibraryList;
