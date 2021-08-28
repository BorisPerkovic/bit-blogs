import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogsCommunicator } from "../../../Services/data-services";



const SinglePost = (props) => {

  const postID = props.match.params.id;
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [authorsPosts, setAuthorsPosts] = useState([]);

  const onPostFetch = () => {
    const singlePosts = async () => {
      const newPost = await BlogsCommunicator.fetchSinglePost(postID);
      setPost(newPost);
    };
    
    singlePosts();
  }

  const onUserFetch = () => {
    const singleUser = async () => {
      const newUser = await BlogsCommunicator.fetchSingleUser(post.userId);
      setUser(newUser);
    };
    
    singleUser();
  }

  const onAuthorsPosts = () => {
    const authorsPosts = async () => {
      const posts = await BlogsCommunicator.fetchAuthorsPosts(post.userId);
      setAuthorsPosts(posts);
    };
    
    authorsPosts();
  }

  useEffect(onPostFetch, [postID]);
  useEffect(onUserFetch, [post]);
  useEffect(onAuthorsPosts, [post.userId]);

  console.log(authorsPosts);

  return (
    <div className="container">
      <h2 className="text-center mt-5">{post.title}</h2>
      <Link className="text-center d-block">{user.name}</Link>
      <div className="row">
        <div className="col-md-12 py-5 border-bottom border-dark">
          <p className="text-center">{post.body}</p>
        </div>
        <div className="col-md-12 p-5">
          <h4>{authorsPosts.length} more post from this author</h4>
          <ul>
              {authorsPosts.map(post => <Link to={`/posts/single-post/${post.id}`} key={post.id}><li>{post.title}</li></Link>)}
          </ul>
        </div>
      </div>
    </div>
  );

};

export default SinglePost;