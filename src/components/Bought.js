import React from "react";
import { Box, Typography } from "@mui/material";

function Bought({ nom }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box sx={style}>
      <Typography variant="h7" component="div">
        Merci {nom} pour avoir acheté les chansons chez Apple
      </Typography>
    </Box>
  );
}

export default Bought;
