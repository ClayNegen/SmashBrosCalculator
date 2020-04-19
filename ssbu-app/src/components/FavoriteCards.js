import React from "react";
import Card from "./Card";
import db from "../firebase";

function Cards() {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      db.collection("favorites").onSnapshot(function (data) {
        setCharacters(data.docs.map((doc) => ({ ...doc.data() })));
      });
    };
    fetchData();
  }, []);

  console.log("Characters: ", characters);

  return (
    <div>
      {characters.map((obj, index) => (
        <Card
          key={index}
          title={obj.Name}
          user={obj.OwnerId}
          img={obj.ThumbnailUrl}
          moves={obj.Related.Smash4.Moves}
        />
      ))}
    </div>
  );
}

export default Cards;
