import React, { useEffect, useState, Fragment } from "react";
import PostItem from "../PostItems/PostItem";
import { BlogsCommunicator } from "../../../../Services/data-services";
import Spinner from "../../../components/Spinner/Spinner";

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onPostsFetch = () => {
    const allPosts = async () => {
      const newPosts = await BlogsCommunicator.fetchAllPosts();
      setPosts(newPosts.slice(0, 30));
      setIsLoading(false);
    };
    
    allPosts();
  }

  useEffect(onPostsFetch, []);

  return (
    <Fragment>
      <div className="container">
        <h2 className="text-center my-5">POSTS</h2>
        <div className="row">
          {isLoading && <Spinner />}
          {!isLoading && posts.map(post => <PostItem post={post} key={post.id} />)}
        </div>
      </div>
    </Fragment>
    
  );
};

export default Posts;