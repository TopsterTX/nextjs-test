import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";

import MainLayout from "../../components/MainLayout";

interface IPost {
  id: number;
  title: string;
  author: string;
  body: string;
}

const Posts = ({ json }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const createPostHandler = () => {
    Router.push("/post/new");
  };

  useEffect(() => {
    setPosts(json);
  }, [json]);

  return (
    <MainLayout>
      <h1>Posts</h1>
      <button onClick={createPostHandler}>New post</button>
      <ul>
        {posts.length &&
          posts.map((post) => (
            <li key={post.id}>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
    </MainLayout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:4200/posts");
  const json = await res.json();

  return {
    props: { json },
  };
}

export default Posts;
