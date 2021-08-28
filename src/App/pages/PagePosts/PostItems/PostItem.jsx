import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {

  return (
    <div className="col-md-12 p-2 border-bottom border-dark">
     <h3><Link to={`/posts/single-post/${post.id}`}>{post.title}</Link></h3> 
      <p>{post.body.slice(0, 80)}...</p>
    </div>
  );
};

export default PostItem;