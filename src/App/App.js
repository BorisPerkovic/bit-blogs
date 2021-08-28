import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewPost from "./pages/NewPost/NewPostForm";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/posts/new-post" component={NewPost} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
