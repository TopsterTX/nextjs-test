import Router, { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const backClickHandler = () => {
    Router.push("/posts");
  };

  return (
    <div>
      <div>
        <h1>Post {id}</h1>
        <button onClick={backClickHandler}>Back</button>
      </div>
    </div>
  );
};

export default Post;
