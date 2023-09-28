import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useState } from "react";
import AccessibleTable from "../LibraryList/showEnrolment";
import { Url } from "../../constant";

const EnrollmentLibrary = (props) => {
  const { selectedLibraryId } = props;

console.log({selectedLibraryId})
  const [libraryEnrollmentList, setLibraryEnrollmentList] = useState([]);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  useEffect(() => {
    if (id) {
        console.log(id)
      const handleLibraryEnrollment = async (id) => {
        const CIT = Cookies.get("CIT");
        const config = {
          headers: {
            Authorization: CIT,
          },
        };
        try {
          const response = await axios.get(
            `${Url}/enrollment?libraryId=${id}`,
            config
          );
          setLibraryEnrollmentList(response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      handleLibraryEnrollment(id);
    }
  }, [id]);
  return (
    <div>
      {libraryEnrollmentList.length > 0 ? (
        <h1>Students Enrolled In Library</h1>
      ) : (
        <h1>No Student is Enrolled in this library yet</h1>
      )}
      {libraryEnrollmentList.length > 0 && (
        <AccessibleTable row={libraryEnrollmentList} />
      )}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '30px' }}>
        <button>Enroll New Student</button>
        </div>
    </div>
  );
};
export default EnrollmentLibrary;
