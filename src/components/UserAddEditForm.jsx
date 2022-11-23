import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUserDetails, setEditSaveDisabled } from "../features/userSlice";
import { Box, Typography, TextField, Button } from "@mui/material";

const UserAddEditForm = () => {
  const isEditMode = useSelector((state) => state.user.isEditMode);
  const state = useSelector((state) => state);
  // console.log('state', state);
  const editModal = useSelector((state) => state.user.editModal);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  return (
    <Box
      className="user-inputs-container"
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        className="user-f-name"
        error={editModal.firstName.length < 3}
        helperText={!editModal.firstName.length ? "First name is required" : ""}
        value={isEditMode ? editModal.firstName : ""}
        name={editModal.firstName}
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        onChange={(e) => handleChange(e, "firstName", dispatch)}
        required
        fullWidth
      />
      <TextField
        className="user-l-name"
        error={editModal.lastName.length < 3}
        helperText={!editModal.lastName.length ? "Last name is required" : ""}
        value={isEditMode ? editModal.lastName : ""}
        name={editModal.lastName}
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        onChange={(e) => handleChange(e, "lastName", dispatch)}
        required
        fullWidth
      />
      {!isEditMode && (
        <TextField
          className="user-image"
          id="outlined-basic"
          label="Image"
          variant="outlined"
          onChange={handleImageChange}
          fullWidth
          required
        />
      )}

      <TextField
        className="user-email"
        error={editModal.userEmail.length === 0}
        helperText={
          !editModal.userEmail.length ? "Valid email is required" : ""
        }
        value={isEditMode ? editModal.userEmail : ""}
        name={editModal.userEmail}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => handleEmailChange(e, dispatch)}
        fullWidth
        required
      />

      <TextField
        className="country"
        error={editModal.country.length < 3}
        helperText={!editModal.country.length ? "Country is required" : ""}
        value={isEditMode ? editModal.country : ""}
        name={editModal.country}
        id="outlined-basic"
        label="Country"
        variant="outlined"
        onChange={(e) => handleChange(e, "country", dispatch)}
        fullWidth
        required
      />
      <TextField
        className="city"
        error={editModal.city.length < 3}
        helperText={!editModal.city.length ? "City is required" : ""}
        value={isEditMode ? editModal.city : ""}
        name={editModal.city}
        id="outlined-basic"
        label="City"
        variant="outlined"
        onChange={(e) => handleChange(e, "city", dispatch)}
        fullWidth
        required
      />
      <TextField
        className="street"
        error={editModal.street.length < 3}
        helperText={!editModal.street.length ? "Street is required" : ""}
        value={isEditMode ? editModal.street : ""}
        name={editModal.street}
        id="outlined-basic"
        label="Street"
        variant="outlined"
        onChange={(e) => handleChange(e, "street", dispatch)}
        fullWidth
        required
      />
      <Box className="btn">
        {!isEditMode && (
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        )}
      </Box>
    </Box>
  );
};


const handleChange = (e, fieldName, dispatch) => {
  console.log(e.target.value);
  const value = e.target.value;
  dispatch(changeUserDetails({ value, fieldName }));
};

const handleEmailChange = (e, dispatch) => {
  console.log(e.target.value);
  const value = e.target.value;
  dispatch(changeUserDetails({ value, fieldName: "userEmail" }));
};

const handleImageChange = (e) => {
  const value = e.target.value;
  // setUser({ ...user, image: value });
  // const isImageUrlVaid = validUrl(value);
  // if (isImageUrlVaid) {
  //   setImage(value);
  // } else {
  //   console.log("not valid url");
  // }
};

const handleSave = () => {};

export default UserAddEditForm;
