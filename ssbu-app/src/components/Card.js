import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    display: "inline-block",
    maxWidth: 345,
    margin: 15
  }
});

function MoveList(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        {props.moves.map(move => (
          <li>{move.Name}</li>
        ))}
      </Card>
    </div>
  );
}

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [moves, setMoves] = React.useState([]);
  const [moveCard, setMoveCard] = React.useState("false");
  const link = props.moves.split("//");
  let newLink = "https://" + link[1];

  React.useEffect(() => {
    const getMoves = async () => {
      fetch(newLink, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      })
        .then(res => res.json())
        .then(response => {
          setMoves(response);
        })
        .catch(error => console.log("Error: ", error));
    };
    getMoves();
  }, []);

  console.log("Moves State: ", moves);

  let showMoves = () => {
    console.log("--------", moveCard);
    if (moveCard === "false") {
      setMoveCard("true");
    } else if (moveCard === "true") {
      setMoveCard("false");
    } else {
      console.log("Error showing moves");
    }
  };

  console.log("MoveCard: ", moveCard);
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={showMoves}>
        <CardMedia
          component="img"
          alt="apples"
          height="140"
          image={props.img}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>{" "}
          <Typography variant="body2" color="textSecondary" component="p">
            {props.user}
          </Typography>{" "}
          {moveCard === "true" && <MoveList moves={moves} />}
        </CardContent>
      </CardActionArea>{" "}
    </Card>
  );
}
