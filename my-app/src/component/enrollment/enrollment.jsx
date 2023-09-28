import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import "./enrollment.css"; // Import your CSS file
import { Url } from "../../constant";

const Enrollment = (props) => {
  const [userEnrollment, setUserEnrollment] = useState([]);

  useEffect(() => {
    const handleEnrollment = async () => {
      const CIT = Cookies.get("CIT");
      const config = {
        headers: {
          Authorization: CIT,
        },
      };
      try {
        const response = await axios.get(
          `${Url}/enrollment/mine`,
          config
        );
        console.log({ response });
        setUserEnrollment(response.data);
      } catch (error) {
        console.error("Error fetching Enrollment:", error);
      }
    };
    handleEnrollment();
  }, []);

  // Function to format the date to a readable format (without time)
  const formatDate = (dateArray) => {
    const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    return date.toLocaleDateString();
  };

  return (
    <div className="enrollment-container">
      {userEnrollment.length > 0 ? (
        <h1>My Enrollment</h1>
      ) : (
        <h1>You are not enrolled in any library.</h1>
      )}
      <table className="enrollment-table ">
        <thead>
          <tr>
            <th>Library</th>
            <th>Enrollment Status</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {userEnrollment.map((enrollment) => (
            <tr key={enrollment.id}>
              <td>{enrollment.libraryName}</td>
              <td>{enrollment.status}</td>
              <td>{formatDate(enrollment.startDate)}</td>
              <td>{formatDate(enrollment.endDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enrollment;
