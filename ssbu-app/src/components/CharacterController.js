import { Component } from "react";
import axios from "axios";

class CharacterController extends Component {
  constructor() {
    this.state = {
      Name: "placeholder",
      ImageURL: "placeholder"
    };
  }

  getCharacters() {
    axios.get("https://api.kuroganehammer.com/api/characters/name/bowser").then(
      response => {
        this.setState(
          {
            Name: response.data.Name,
            ImageURL: response.data.ImageURL
          },
          console.log(response.data)
        );
      },
      error => {
        console.log(error);
      }
    );

    return "Hello";
  }
}

export default CharacterController;
