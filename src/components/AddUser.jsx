import React from "react";
import UserAddEditForm from "./UserAddEditForm";
import { Box, Typography } from "@mui/material";

const AddUser = () => {
  return (
    <Box className="add-user-wrapper">
      <Box className="title">
        <Typography variant="h4" id="child-modal-title" className="modal-title">
          Add New User
        </Typography>
      </Box>
      <Box className="add-form">
        <UserAddEditForm />
      </Box>
    </Box>
  );
};

export default AddUser;
