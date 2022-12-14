import React from "react";
import { setDeleteModal } from "../features/userSlice";
import { removeUserFromList } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Button, Modal, Box } from "@mui/material";

const DeleteModal = () => {
  const userName = useSelector((state) => state.user.deleteModal.userName);
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
            Are you sure you want to delete '
            {userName.first + " " + userName.last}' user?
          </Typography>
          <Box>
            <Button
              size="small"
              variant="contained"
              onClick={() => dispatch(setDeleteModal({ isVisible: false }))}
            >
              Cancel
            </Button>
            <Button
              style={{marginLeft: '0.5rem'}}
              size="small"
              variant="contained"
              color="error"
              onClick={() => dispatch(removeUserFromList())}
            >
              Delete
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

export default DeleteModal;
