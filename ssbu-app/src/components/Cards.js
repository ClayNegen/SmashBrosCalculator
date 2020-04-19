import React from "react";
import Card from "./Card";

function Cards() {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      fetch("https://api.kuroganehammer.com/api/characters")
        .then((res) => res.json())
        .then((response) => {
          setCharacters(response);
        })
        .catch((error) => console.log("Error: ", error));
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
