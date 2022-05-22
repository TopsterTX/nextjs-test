import React from "react";
import Router from "next/router";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mainClickHandler = () => {
    Router.push("/");
  };

  const postsClickHandler = () => {
    Router.push("/posts");
  };

  const aboutClickHandler = () => {
    Router.push("/about");
  };
  return (
    <div>
      <nav>
        <h1>NAVIGATION</h1>
        <section>
          <button onClick={mainClickHandler}>Main</button>
          <button onClick={postsClickHandler}>Posts</button>
          <button onClick={aboutClickHandler}>About</button>
        </section>
      </nav>
      <section>{children}</section>
    </div>
  );
};

export default MainLayout;
