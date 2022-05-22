import { IData } from "./types";

export const submitHandler = async ({
  taskAuthor,
  taskBody,
  taskTitle,
}: IData) => {
  const newTask = {
    id: Math.round(Math.random() * 10000),
    author: taskAuthor,
    body: taskBody,
    title: taskTitle,
  };

  console.log(newTask);

  try {
    const res = await fetch("http://localhost:4200/posts", {
      method: "POST",
      
      body: JSON.stringify(newTask),
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
