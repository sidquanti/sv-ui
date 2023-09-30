import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./enroll-form";

const ModalDialog = ({ open, handleClose,id,setLibraryEnrollmentList }) => {
  return (
    <Dialog open={open}>
      <Form handleClose={handleClose} id={id} setLibraryEnrollmentList={setLibraryEnrollmentList}/>
    </Dialog>
  );
};

export default ModalDialog;
