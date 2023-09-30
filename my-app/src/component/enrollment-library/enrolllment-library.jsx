import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useState } from "react";
import AccessibleTable from "../LibraryList/showEnrolment";
import { Url } from "../../constant";
import Button from '@mui/material/Button';
import ModalDialog from "../modal-dialog/modal-dialog";


const EnrollmentLibrary = (props) => {
  const { selectedLibraryId } = props;

console.log({selectedLibraryId})
  const [libraryEnrollmentList, setLibraryEnrollmentList] = useState([]);
  const [open, setOpen] = useState(false);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <div style={{overflow:'auto'}}>
      <div style={{position:'static'}}>
      <div style={{marginTop:'10vh',marginLeft:'25px'}} >
       {libraryEnrollmentList.length > 0?
       <h1>Students Enrolled In Library</h1>:
      <h1 > No Student is Enrolled in this library yet</h1>
       }
       </div>

      {/* {libraryEnrollmentList.length > 0 ? (
        <h1>Students Enrolled In Library</h1>
      ) : (
        
      )} */}
      
      {libraryEnrollmentList.length > 0 && (
        <AccessibleTable row={libraryEnrollmentList} />
      )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '30px' }}>
        <Button onClick={handleOpen} variant="contained" type="submit">Enroll New Student</Button>
        </div>
      <ModalDialog open={open} handleClose={handleClose} id={id} setLibraryEnrollmentList={setLibraryEnrollmentList} />
    
    </div>
  );
};
export default EnrollmentLibrary;
