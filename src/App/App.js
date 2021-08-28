import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route />
      </Switch>
    </Fragment>
  );
}

export default App;
