import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

import { addTune, removeTune } from "../store";

export default function Tune({ tune }) {
  const dispatch = useDispatch();
  const myTunes = useSelector((state) => state.panier.tunes);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={tune.artworkUrl100}
        alt={tune.trackName}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {tune.trackName}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {tune.artistName}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {tune.collectionName}
        </Typography>
      </CardContent>
      <CardActions>
        {myTunes.includes(tune) ? (
          <Button
            size="small"
            color="error"
            onClick={() => dispatch(removeTune(tune))}
          >
            Supprimer
          </Button>
        ) : (
          <Button size="small" onClick={() => dispatch(addTune(tune))}>
            Ajouter au panier
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
