import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "inline-block",
    margin: 15,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        to={`/${props.title}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.title}
            height="220"
            image={props.img}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>{" "}
            <Typography variant="body2" color="textSecondary" component="p">
              Click for Moves ...
            </Typography>{" "}
          </CardContent>
        </CardActionArea>{" "}
      </Link>
    </Card>
  );
}
