import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { BlogsCommunicator } from "../../../Services/data-services";
import Spinner from "../../components/Spinner/Spinner";

import classes from "./SinglePost.module.css";

const SinglePost = (props) => {
  const postID = props.match.params.id;
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [authorsPosts, setAuthorsPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onPostFetch = () => {
    const singlePosts = async () => {
      const newPost = await BlogsCommunicator.fetchSinglePost(postID);
      setPost(newPost);
    };

    singlePosts();
  };

  const onUserFetch = () => {
    const singleUser = async () => {
      const newUser = await BlogsCommunicator.fetchSingleUser(post.userId);
      setUser(newUser);
    };

    singleUser();
  };

  const onAuthorsPosts = () => {
    const authorsPosts = async () => {
      const posts = await BlogsCommunicator.fetchAuthorsPosts(post.userId);
      setAuthorsPosts(posts);
      setIsLoading(false);
    };

    authorsPosts();
  };

  useEffect(onPostFetch, [postID]);
  useEffect(onUserFetch, [post]);
  useEffect(onAuthorsPosts, [post.userId]);

  return (
    <Fragment>
      <div className="container">
        {isLoading && <Spinner />}
        <div className="col-md-12">
          <h2 className="text-center mt-5">{post.title}</h2>
        {!isLoading && (
          <Link
            to={`/authors/author/${user.id}`}
            className="text-center"
          >
            <p>{user.name}</p>
          </Link>
        )}
        </div>
        <div className={`row ${classes.postCenter}`}>
          <div className="col-md-12 py-5 border-bottom border-dark">
            {!isLoading && <p className="text-center">{post.body}</p>}
          </div>
          <div className="col-md-12 p-5">
            <h4>{authorsPosts.length} more post from this author</h4>
            <ul>
              {!isLoading &&
                authorsPosts.map((post) => (
                  <Link to={`/posts/single-post/${post.id}`} key={post.id}>
                    <li>{post.title}</li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SinglePost;
