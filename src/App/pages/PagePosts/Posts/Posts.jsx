import React from "react";
import PostItem from "./PostItem";

const Posts = () => {

  return (
    <div className="container">
      <h2 className="text-center my-5">POSTS</h2>
      <div className="row">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

export default Posts;