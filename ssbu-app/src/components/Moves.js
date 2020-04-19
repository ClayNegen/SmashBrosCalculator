import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";

export default function Moves(props) {
  const [moves, setMoves] = React.useState([]);
  const [openMove, setOpenMove] = React.useState({});
  const link = props.link.split("//");
  let newLink = "https://" + link[1];

  function OnClick(move) {
    if (openMove.Name == move.Name && openMove.isOpen == true) {
      setOpenMove({ ...move, isOpen: false });
    } else {
      setOpenMove({ ...move, isOpen: true });
    }
  }

  React.useEffect(() => {
    const getMoves = async () => {
      fetch(newLink, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          setMoves(response);
        })
        .catch((error) => console.log("Error: ", error));
    };
    getMoves();
  }, []);

  console.log("moves: ", moves);

  return (
    <Grid container spacing={3}>
      {moves.map((obj, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Button
            id={obj.Name}
            onClick={() => OnClick(obj)}
            size="small"
            style={{ color: "inherit" }}
          >
            {obj.Name}
          </Button>
          {openMove.Name === obj.Name && openMove.isOpen && (
            <MoveBox obj={obj} />
          )}
        </Grid>
      ))}
    </Grid>
  );
}

function MoveBox(props) {
  function cleanHitBox(ha) {
    let hitbox = "";
    console.log("length: ", ha.length);
    if (ha.length == 1 || ha.length == 2) {
      let total = parseInt(ha) / 60;
      hitbox = total.toFixed(4) + " seconds";
    } else if (ha.length < 9) {
      let str = ha.split("-");
      let total = (parseInt(str[1]) - parseInt(str[0])) / 60;
      hitbox = total.toFixed(4) + " seconds";
    } else {
      hitbox = NaN + " seconds";
    }
    return hitbox;
  }

  function Calculate(ha, faf) {
    let hitbox = cleanHitBox(ha);
    let time = parseInt(faf) / 60;
    let frame = time.toFixed(4) + " seconds";
    document.getElementById("ha").innerHTML = hitbox;
    document.getElementById("faf").innerHTML = frame;
  }

  return (
    <Card>
      <CardContent>
        <h2>Hitbox Active</h2>
        <p id="ha">{props.obj.HitboxActive} frames</p>
        <h2>First Actionable Frame</h2>
        <p id="faf">{props.obj.FirstActionableFrame} frames</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            Calculate(props.obj.HitboxActive, props.obj.FirstActionableFrame)
          }
        >
          Calculate
        </Button>
      </CardContent>
    </Card>
  );
}
