import React from "react";
import Link from "react-router-dom";

import AuthorItem from "./AuthorItem/AuthorItem";

const AuthorsList = () => {
  return (
    <div className="container">
      <h2 className="text-center my-5"> AUTHORS (NUM)</h2>
      <div className="row">
        <AuthorItem />
        <AuthorItem />
        <AuthorItem />
      </div>
    </div>
  );
};

export default AuthorsList;
