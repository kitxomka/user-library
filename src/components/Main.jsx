import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchUsers } from "../features/userSlice";
import { Box, Typography } from "@mui/material";

import Users from "./Users";
import Loading from "./Loading";
import Search from "./Search";

const fetchAllUsers = async (dispatch, setLoading) => {
  try {
    const allData = await axios.get(`https://randomuser.me/api/?results=10`);
    // console.log("allData", allData);
    if (allData.status == 200) {
      // console.log(allData.data.results);

      const usersList = allData.data.results;
      dispatch(fetchUsers(usersList));
      setLoading(false);
    }
  } catch (error) {
    console.log("error", error);
  }
};

const Main = () => {
    
  const filterBy = useSelector((state) => state.user.filterBy);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAllUsers(dispatch, setLoading);
  }, []);

  const pageTitle =
    filterBy.length === 0 ? (
      <Typography  variant="h3">
        Users
      </Typography>
    ) : (
      <Typography  variant="h3">
        Filtered Users
      </Typography>
    );

  return (
    <Box className="main-wrapper">
      <Search />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Box className="title">{pageTitle}</Box>
          <Box className="users-wrapper">
            <Users />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Main;
