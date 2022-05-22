import React, { useState } from "react";
import Router from "next/router";

import MainLayout from "../../components/MainLayout";

interface IPost {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: "post test 1", body: "the first post body" },
    { id: 2, title: "post test 2", body: "the second post body" },
  ]);

  const postClickHandler = (id: number) => () => {
    Router.push(`/post/${id}`);
  };

  return (
    <MainLayout>
      <h1>Posts</h1>
      <ul>
        {posts.length &&
          posts?.map((post) => (
            <li key={post.id} onClick={postClickHandler(post.id)}>
              <p>{post.id}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </MainLayout>
  );
};

export default Posts;
