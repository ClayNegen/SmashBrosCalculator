import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import FavoriteCards from "./FavoriteCards";

export default function Home() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Smash Bros Frame Calculator" />
          <main>
            <div>
              <FavoriteCards />
            </div>
          </main>
        </Container>
      </React.Fragment>
    </div>
  );
}
