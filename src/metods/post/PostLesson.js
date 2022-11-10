import axios from "axios";
import React, { useEffect, useState } from "react";

function PostLesson() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, []);

  function createPost() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hello React",
        body: "This is a post Lesson task!",
      })
      .then((res) => {
        setPost(res.data);
      });
  }

  if (!post) return "Loading Text...";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Click</button>
    </div>
  );
}

export default PostLesson;
