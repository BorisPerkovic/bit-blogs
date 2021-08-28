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
<<<<<<< HEAD
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> ade418e662a272cfd9e7036caaea5865ce5a5948
=======
>>>>>>> ade418e662a272cfd9e7036caaea5865ce5a5948
    </Fragment>
  );
}

export default App;
