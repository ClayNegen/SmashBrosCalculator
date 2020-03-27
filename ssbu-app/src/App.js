import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [updateItem, setUpdateItem] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      fetch("https://api.kuroganehammer.com/api/characters")
        .then(res => res.json())
        .then(response => {
          setUpdateItem(response);
        })
        .catch(error => console.log("Error: ", error));
    };
    fetchData();
  }, []);

  console.log("Update Item: ", updateItem);

  return (
    <div className="App">
      <header className="App-header">
        <p> Hello World! </p>
        {updateItem.map((obj, index) => (
          <Card
            key={index}
            title={obj.Name}
            user={obj.OwnerId}
            img={obj.ThumbnailUrl}
            moves={obj.Related.Smash4.Moves}
          />
        ))}
      </header>{" "}
    </div>
  );
}

export default App;
