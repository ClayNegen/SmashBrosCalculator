import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

/*
const CharacterController = require("./CharacterController");
let state = CharacterController.getCharacters();
console.log("State: ", state);
*/

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

async function getFunction() {
  let response = await fetch(
    "https://api.kuroganehammer.com/api/characters/name/bowser"
  );
  let data = await response.json();
  return data;
}

export default function ImgMediaCard() {
  const classes = useStyles();
  getFunction().then(data => setStuff(data));
  console.log("Stuff: ", this.stuff);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard{" "}
          </Typography>{" "}
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,
            000 species, ranging across all continents except Antarctica{" "}
          </Typography>{" "}
        </CardContent>{" "}
      </CardActionArea>{" "}
    </Card>
  );
}
