import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogsCommunicator } from "../../../../../Services/data-services";

const AuthorItem = ({ author }) => {
  const [authorPosts, setAuthorPosts] = useState([]);

  const onAuthorsPosts = () => {
    const authorsPosts = async () => {
      const posts = await BlogsCommunicator.fetchAuthorsPosts(author.id);
      setAuthorPosts(posts);
    };

    authorsPosts();
  };

  useEffect(onAuthorsPosts, [author.id]);

  return (
    <div className="col-md-12 p-3 border-bottom border-dark">
      <Link to={`/author/${author.id}`}>
        {" "}
        {author.name} ( {authorPosts.length})
      </Link>
    </div>
  );
};

export default AuthorItem;
