import React from "react";
import { useDispatch } from "react-redux";
import { updateFilterBy } from "../features/userSlice";
import { Box, TextField } from "@mui/material";




const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    // console.log(value);
    dispatch(updateFilterBy(value));
  };

  return (
    <Box className="search-wraper" sx={{ width: 500, maxWidth: "100%" }}>
      <TextField
        fullWidth
        label="Search..."
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Box>
  );
};

export default Search;
