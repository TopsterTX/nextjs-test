import Router, { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

const Post = ({ post }) => {
  return (
    <MainLayout>
      <div>
        <h1>Post {post.id}</h1>
        <p>{post.body}</p>
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:4200/posts/${context.query.id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

export default Post;
