import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { List, ListItem, ListItemText } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const panierFooter = {
  display: "flex",
  justifyContent: "space-between",
};

export default function Panier({
  tunes,
  total,
  open,
  showPanier,
  showBuy,
  showResults,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => showPanier(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            My Tunes
          </Typography>
          {tunes ? (
            <>
              <List>
                {tunes.map((tune) => (
                  <ListItem disablePadding>
                    <ListItemText
                      primary={
                        tune.trackName + " - " + tune.trackPrice + " DZD"
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Box sx={panierFooter}>
                <Typography variant="h7" component="div">
                  Prix Total: {total} DZD
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    showResults(false);
                    showPanier(false);
                    showBuy(true);
                  }}
                >
                  Acheter
                </Button>
              </Box>
            </>
          ) : (
            <Typography gutterBottom variant="h7" component="div">
              Vide !!!!
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
