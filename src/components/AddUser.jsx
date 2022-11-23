import React, {useEffect} from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setEditMode } from "../features/userSlice";
import Form from "./UserAddEditForm";

import { Box, Typography, TextField, Button } from "@mui/material";

const AddUser = () => {
//   const editMode = useSelector((state) => state.user.editMode);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();


  return (
    <Box className="add-user-wrapper">
      <Box className="title">
        <Typography variant="h4" id="child-modal-title" className="modal-title">
          Add New User
        </Typography>
      </Box>
      <Box className="add-form">
        <Form />
      </Box>
      
    </Box>
  );
};

export default AddUser;
