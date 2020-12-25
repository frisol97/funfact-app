import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header";
import { Main } from "./Pages/Main";
import { Funfact } from "./Pages/Funfact";
import { FamilyFeud } from "./Pages/FamilyFeud";
import "./App.scss";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/hjem">
            <Main />
          </Route>
          <Route exact path="/funfact">
            <Funfact />
          </Route>
          <Route exact path="/familyfeud">
            <FamilyFeud />
          </Route>
        </Switch>
      </main>
    </>
  );
}
