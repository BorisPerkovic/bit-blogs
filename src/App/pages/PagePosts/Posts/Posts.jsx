import React, { useEffect, useState } from "react";
import PostItem from "../PostItems/PostItem";
import { BlogsCommunicator } from "../../../../Services/data-services";

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const onPostsFetch = () => {
    const allPosts = async () => {
      const newPosts = await BlogsCommunicator.fetchAllPosts();
      setPosts(newPosts.slice(0, 30));
    };
    
    allPosts();
  }

  useEffect(onPostsFetch, []);

  return (
    <div className="container">
      <h2 className="text-center my-5">POSTS</h2>
      <div className="row">
        {posts.map(post => <PostItem post={post} key={post.id} />)}
      </div>
    </div>
  );
};

export default Posts;