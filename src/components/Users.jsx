import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import User from "./User";
import DeleteModal from "./DeleteModal";
import EditUserModal from "./EditUserModal";


const Users = () => {
  const usersList = useSelector((state) => state.user.usersList);
  const filterBy = useSelector((state) => state.user.filterBy);
  const isDeleteModalVisible = useSelector(
    (state) => state.user.deleteModal.isVisible
  );
  const isEditModalVisible = useSelector(
    (state) => state.user.editModal.isVisible
  );


  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    filterUserList(usersList, filterBy);
  }, [usersList, filterBy]);

  useEffect(() => {
    setFilteredList(usersList);
  }, [usersList]);

  const filterUserList = (usersList, filterBy) => {
    if (filterBy?.length > 0) {
      console.log("filterBy", filterBy);
      let tmpFilteredList = usersList.filter(
        (user) =>
          user.email?.toLowerCase().includes(filterBy.toLowerCase()) ||
          user.name.first?.toLowerCase().includes(filterBy.toLowerCase()) ||
          user.name.last?.toLowerCase().includes(filterBy.toLowerCase()) ||
          user.login.uuid?.toLowerCase().includes(filterBy.toLowerCase()) ||
          user.location.country
            ?.toLowerCase()
            .includes(filterBy.toLowerCase()) ||
          user.location.city?.toLowerCase().includes(filterBy.toLowerCase()) ||
          user.location.street.name
            ?.toLowerCase()
            .includes(filterBy.toLowerCase())
      );
      setFilteredList(tmpFilteredList);
    }
  };

  const userHtml = filteredList?.map((userDetails) => (
    <User key={userDetails.login.uuid} userDetails={userDetails} />
  ));

  return (
    <Box>
      {isEditModalVisible && <EditUserModal />}
      {isDeleteModalVisible && <DeleteModal />}
      <div className="users-list">
        {filteredList.length > 0 ? userHtml : "There is no match"}
      </div>
    </Box>
  );
};

export default Users;
