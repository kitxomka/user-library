import React from "react";
import { useDispatch } from "react-redux";
import {
  setEditUserModal,
  setDeleteModal
} from "../features/userSlice";
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  Button,
  CardActions
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const User = ({ userDetails }) => {
  const dispatch = useDispatch();

  return (
    <Card key={userDetails.login.uuid} className="oneUser">
        <CardHeader
        title={userDetails.name.first + " " + userDetails.name.last}
      />
      <div className="bg">
        <img src={userDetails.picture.medium} alt="user" />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {userDetails.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {userDetails.location.street.name +
            ", " +
            userDetails.location.city +
            ", " +
            userDetails.location.country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {userDetails.login.uuid}
        </Typography>
      </CardContent>
      <CardActions className="btns-wrapper">
        <Button
          className="delBtn"
          size="small"
          variant="contained"
          onClick={() =>
            handleDelete(userDetails.login.uuid, dispatch, userDetails.name)
          }
        >
          <DeleteIcon />
        </Button>
        <Button
          className="editBtn"
          size="small"
          variant="contained"
          onClick={
            () => 
            dispatch(setEditUserModal({ isVisible: true, userDetails }))
          }
        >
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

const handleDelete = (id, dispatch, name) => {
  // console.log("del", id);
  dispatch(
    setDeleteModal({
      isVisible: true,
      userId: id,
      userName: name,
    })
  );
};

export default User;
