import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/PagePosts/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewPost from "./pages/NewPost/NewPostForm";
import SinglePost from "./pages/SinglePost/SinglePost";
import About from "./pages/PageAbout/About";
import AuthorsList from "./pages/PageAuthors/AuthorsList/AuthorsList";
import Author from "./pages/PageAuthors/Author/Author";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/new-post" component={NewPost} />
        <Route path="/posts/single-post/:id" component={SinglePost} />
        <Route path="/about" component={About} />
        <Route exact path="/authors" component={AuthorsList} />
        <Route path="/authors/author/:id" component={Author} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
