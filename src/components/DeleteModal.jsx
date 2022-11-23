import React from "react";
import { setDeleteModal } from "../features/userSlice";
import { removeUserFromList } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Button, Modal, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

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
              color="error"
              onClick={() => dispatch(setDeleteModal({ isVisible: false }))}
            >
              <CloseIcon />
            </Button>
            <Button
              //   style={{paddingLeft: '5px'}}
              size="small"
              variant="contained"
              color="success"
              onClick={() => dispatch(removeUserFromList())}
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
export default DeleteModal;
