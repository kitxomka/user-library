import React from "react";
import {
  setEditUserModal,
  userDetailsUpdate,
  setEditSaveDisabled,
} from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Button, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
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
              color="error"
              onClick={() => dispatch(setEditUserModal({ isVisible: false }))}
            >
              <CloseIcon />
            </Button>
            <Button
              //   style={{paddingLeft: '5px'}}
              disabled={editSaveDisabled}
              size="small"
              variant="contained"
              color="success"
              onClick={() => dispatch(userDetailsUpdate())}
            >
              <CheckIcon />
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
  border: "2px solid #000",
  pt: 2,
  px: 4,
  pb: 3,
};
export default EditUserModal;
