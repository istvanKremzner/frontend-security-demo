import React, { useEffect, useState } from "react";
import { BlogPost } from "../components/blog-post.component";
import { JsArticle } from "@/components/js-article.component";

const Home = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch("/api/comments");
        const resultBody = await result.json();

        setComments(resultBody.comments);
      } catch {
        console.log("Couldn't retrieve comments!");
      }
    })();
  }, []);

  return (
    <div>
      <BlogPost
        comments={comments}
        title={
          "The Awesomeness of JavaScript: A Versatile and Powerful Programming Language"
        }
        onCommentCreated={async (comment) => {
          const response = await fetch("/api/comments/create", {
            method: "POST",
            body: JSON.stringify({ comment }),
          });

          const newComments = await response.json();

          setComments(newComments.comments);
        }}
      >
        <JsArticle />
      </BlogPost>
    </div>
  );
};

export default Home;
