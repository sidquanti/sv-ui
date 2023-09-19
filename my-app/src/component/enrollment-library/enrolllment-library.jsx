import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useState } from "react";
import AccessibleTable from "../LibraryList/showEnrolment";

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
            `http://localhost:8080/enrollment?libraryId=${id}`,
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
        <h1>List of Enrollments</h1>
      {libraryEnrollmentList.length > 0 && (
        <AccessibleTable row={libraryEnrollmentList} />
      )}
    </div>
  );
};
export default EnrollmentLibrary;
