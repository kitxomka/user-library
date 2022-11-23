import React from "react";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box className="loading-wrapper">
      <Typography>
        <CircularProgress />
      </Typography>
    </Box>
  );
};

export default Loading;
