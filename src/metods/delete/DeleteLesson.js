import axios from "axios";
import React, { useEffect, useState } from "react";

function DeleteLesoon() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      setPost(res.data);
    });
  }, []);

  function deletePost() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(() => {
      alert("Post Deleted!");
      setPost(null);
    });
  }

  if (!post) {
    return "post deleted"
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default DeleteLesoon;
