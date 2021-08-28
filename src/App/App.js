import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/PagePosts/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewPost from "./pages/NewPost/NewPostForm";
import SinglePost from "./pages/SinglePost/SinglePost";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/new-post" component={NewPost} />
        <Route path="/posts/single-post" component={SinglePost} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
