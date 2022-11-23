import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUserDetails } from "../features/userSlice";
import { Box, TextField, Button } from "@mui/material";

const UserAddEditForm = () => {
  const isEditMode = useSelector((state) => state.user.isEditMode);
  const editModal = useSelector((state) => state.user.editModal);
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
        error={isEditMode && editModal.firstName.length < 3}
        helperText={isEditMode && !editModal.firstName.length ? "First name is required" : ""}
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
        error={isEditMode && editModal.lastName.length < 3}
        helperText={isEditMode && !editModal.lastName.length ? "Last name is required" : ""}
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
          onChange={()=>{}}
          fullWidth
          required
        />
      )}

      <TextField
        className="user-email"
        error={isEditMode && editModal.userEmail.length === 0}
        helperText={
          isEditMode && !editModal.userEmail.length ? "Valid email is required" : ""
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
        error={isEditMode && editModal.country.length < 3}
        helperText={isEditMode && !editModal.country.length ? "Country is required" : ""}
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
        error={isEditMode && editModal.city.length < 3}
        helperText={isEditMode && !editModal.city.length ? "City is required" : ""}
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
        error={isEditMode && editModal.street.length < 3}
        helperText={isEditMode && !editModal.street.length ? "Street is required" : ""}
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
  dispatch(changeUserDetails({ value: e.target.value, fieldName }));
};

const handleEmailChange = (e, dispatch) => {
  dispatch(changeUserDetails({ value: e.target.value, fieldName: "userEmail" }));
};

const handleSave = () => {};

export default UserAddEditForm;
