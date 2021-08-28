import React from "react";
import { Link } from "react-router-dom";

const AuthorItem = (props) => {
  return (
    <div className="col-md-12 p-3 border-bottom border-dark">
      <Link to="/author/1"> Name Surname ( num - posts)</Link>
    </div>
  );
};

export default AuthorItem;
