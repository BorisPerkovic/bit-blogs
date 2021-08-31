import React, { useState, useEffect } from "react";
import { BlogsCommunicator } from "../../../../Services/data-services";
import Spinner from "../../../components/Spinner/Spinner";

import AuthorItem from "./AuthorItem/AuthorItem";

const AuthorsList = () => {
  const [allAuthors, setAllAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAuthors = () => {
    const fetchAuthors = async () => {
      const newAuthors = await BlogsCommunicator.fetchAllUsers();
      console.log(newAuthors);
      setAllAuthors(newAuthors);
      setIsLoading(false);
    };
    fetchAuthors();
  };

  useEffect(getAuthors, []);

  return (
    <div className="container">
      {isLoading && <Spinner />}
      <h2 className="text-center my-5"> AUTHORS ({allAuthors.length})</h2>
      <div className="row">
        {allAuthors.map((author) => (
          <AuthorItem key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsList;
