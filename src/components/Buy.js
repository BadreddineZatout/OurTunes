import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

function Buy({ tunes, total, buyer, showBought }) {
  const [nom, setNom] = React.useState("");
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
  const styleForm = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          My Tunes
        </Typography>
        <List>
          {tunes.map((tune) => (
            <ListItem disablePadding>
              <ListItemText
                primary={tune.trackName + " - " + tune.trackPrice + " DZD"}
              />
            </ListItem>
          ))}
        </List>
        <Box>
          <Typography variant="h7" component="div">
            Prix Total: {total} DZD
          </Typography>
        </Box>
      </Box>
      <Box component="form" sx={styleForm} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Nom et Prenom"
          Placeholder="Nom et Prenom"
          onChange={(e) => setNom(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Adresse"
          Placeholder="Adresse"
        />
        <Button
          variant="contained"
          onClick={() => {
            buyer(nom);
            showBought(true);
          }}
        >
          Acheter
        </Button>
      </Box>
    </div>
  );
}

export default Buy;
