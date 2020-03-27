import React, { Component } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Add this in your component file
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    axios.get("https://api.kuroganehammer.com/api/characters").then(
      response => {
        this.setState(
          {
            list: response.data,
            isLoading: false
          },
          console.log(response.data)
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    const classes = useStyles();
    const { list } = this.state;
    console.log("List: ", list);

    return (
      <div>
        {list.map(({ InstanceId, Name, MainImageURL }) => (
          <Card className={classes.root} id={InstanceId}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={Name}
                height="140"
                image={MainImageURL}
                title={Name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {Name}{" "}
                </Typography>{" "}
              </CardContent>{" "}
            </CardActionArea>{" "}
          </Card>
        ))}
      </div>
    );
  }
}

export default CharacterList;
