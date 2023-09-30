import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Url } from "../../constant";
import axios from "axios";
import Cookies from "js-cookie";
import Library from "../library/library";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));

const Form = (props) => {

  const {handleClose=()=>{},id="",setLibraryEnrollmentList=[],isLibrary=false,setUserLibraryList=()=>{}}=props;
  const classes = useStyles();
  // create state variables for each input
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentMobile, setStudentMobile] = useState("");
  const [libraryAddress, setLibraryAddress] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const CIT = Cookies.get("CIT");
    const config = {
        headers: {
          Authorization: CIT,
        },
      };
      
    if(!isLibrary){
        const data={
            "libraryId" : id,
            "name" : studentName,
            "mobile" : studentMobile,
            "email" : studentEmail,
        }
    const resp=await axios.post(`${Url}/enrollment`,data,config);
    try{
    const response = await axios.get(
        `${Url}/enrollment?libraryId=${id}`,
        config
      );
      setLibraryEnrollmentList(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
}
else{
    const data={
        "cityId" : 1,
        "name" : studentName,
        "mobile" : studentMobile,
        "email" : studentEmail,
        "address": libraryAddress,
    }
    const resp=await axios.post(`${Url}/library`,data,config);
    try{
    const response = await axios.get(
        `${Url}/library/users`,
        config
      );
      setUserLibraryList(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
}
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label={isLibrary?'Library Name':'Student Name'}
        variant="filled"
        required
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      {isLibrary&&<TextField
        label="Library Address"
        variant="filled"
        required
        value={libraryAddress}
        onChange={(e) => setLibraryAddress(e.target.value)}
      />}
      <TextField
        label={isLibrary?'Library Email':'Student Email'}
        variant="filled"
        type="email"
        required
        value={studentEmail}
        onChange={(e) => setStudentEmail(e.target.value)}
      />
      <TextField
        label={isLibrary?'Library Mobile':'Student Mobile'}
        variant="filled"
        required
        value={studentMobile}
        onChange={(e) => setStudentMobile(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
          {isLibrary?'Add Library':'Enroll'}
        </Button>
      </div>
    </form>
  );
};


export default Form;
