import React from "react";
import { Link } from "react-router-dom";

const PostItem = (props) => {

  return (
    <div className="col-md-12 p-2 border-bottom border-dark">
      <Link to="/posts/single-post"><h3>Title</h3></Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam?</p>
    </div>
  );
};

export default PostItem;