import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Header from "./Header";
import Moves from "./Moves";
import db from "../firebase";

const sections = [
  { title: "All Characters", url: "/all" },
  { title: "Favorites", url: "/favorite" },
];

export default function Character({ match }) {
  const [Character, setCharacter] = React.useState({});
  const [moveLink, setMoveLink] = React.useState(null);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    //Get Favorites
    db.collection("favorites").onSnapshot(function (data) {
      setFavorites(data.docs.map((doc) => doc.data().Name));
    });
    //Get Character
    fetch(
      `https://api.kuroganehammer.com/api/characters/name/${match.params.name}`
    )
      .then((res) => res.json())
      .then((response) => {
        setCharacter(response);
        setMoveLink(response.Related.Smash4.Moves);
      })
      .catch((error) => console.log("Error: ", error));
  };

  console.log("Character", Character);

  favorites.forEach((name) => {
    if (Character.Name == name) {
      document.getElementById("fb").innerHTML = "ADDED";
      document.getElementById("fb").disabled = "true";
    }
  });

  function addToFirebase() {
    console.log("Writing to FB: ", Character);
    db.collection("favorites").add(Character);
    document.getElementById("fb").innerHTML = "ADDED";
    document.getElementById("fb").disabled = "true";
  }

  const moves = moveLink ? <Moves link={moveLink} /> : null;

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Smash Bros Frame Calculator" sections={sections} />
          <div style={{ justifyContent: "center" }}>
            <Card>
              <CardMedia
                component="img"
                alt={Character.Name}
                image={Character.MainImageUrl}
                title={Character.Name}
              />
            </Card>
          </div>
          <main>
            <h1>{Character.DisplayName}</h1>
            <Button id="fb" color="primary" onClick={() => addToFirebase()}>
              Add To Favorites
            </Button>
            <h2>Moves</h2>
            <p>Click a move to veiw frames and calculate time</p>
            {moves}
          </main>
        </Container>
      </React.Fragment>
    </div>
  );
}
