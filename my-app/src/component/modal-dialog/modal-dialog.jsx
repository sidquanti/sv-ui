import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./enroll-form";

const ModalDialog = (props) => {
    const {open=false}=props;
  return (
    <Dialog open={open}>
      <Form {...props}/>
    </Dialog>
  );
};

export default ModalDialog;
