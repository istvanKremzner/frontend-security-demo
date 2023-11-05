import React from "react";
import { BlogPost } from "../components/blog-post.component";
import { JsArticle } from "@/components/js-article.component";

const posts = [
  {
    title: "Js is awesome",
    content: "This is the content of the first blog post.",
  },
];

const initialComments = [
  "Best article ever! 😍",
  "Js ftw 🌚",
  "Nice job ChatGpt 🫡",
];

const Home = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          initialComments={initialComments}
          title={
            "The Awesomeness of JavaScript: A Versatile and Powerful Programming Language"
          }
        >
          <JsArticle />
        </BlogPost>
      ))}
    </div>
  );
};

export default Home;
