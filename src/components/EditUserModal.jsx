import React from "react";
import {
  setEditUserModal,
  userDetailsUpdate,
} from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button, Modal, Box } from "@mui/material";
import UserAddEditForm from "./UserAddEditForm";

const EditUserModal = () => {
  const editSaveDisabled = useSelector((state) => state.user.editSaveDisabled);
  const dispatch = useDispatch();

  return (
    <Modal className="modal-wrapper" hideBackdrop open={true}>
      <Box sx={{ ...style, width: 300 }}>
        <Box className="modal">
          <Typography
            variant="h6"
            id="child-modal-title"
            className="modal-title"
          >
            Edit User
          </Typography>
          <Box>
            <UserAddEditForm />
          </Box>
          <Box>
            <Button
              size="small"
              variant="contained"
              onClick={() => dispatch(setEditUserModal({ isVisible: false }))}
            >
              Cancel
            </Button>
            <Button
              style={{marginLeft: '0.5rem'}}
              disabled={editSaveDisabled}
              size="small"
              variant="contained"
              color="success"
              onClick={() => dispatch(userDetailsUpdate())}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  pt: 2,
  px: 4,
  pb: 3,
};

export default EditUserModal;
