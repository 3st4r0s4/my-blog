import React, { useState, useEffect } from "react";
import ArticlePreview from "./ArticlePreview";

export default function HomeLatestArticles({ articles }) {
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    setLatestArticles(articles.slice(0, 5));
  }, [articles]);

  function renderArticlePreviews() {
    return latestArticles.map((article) => {
      return <ArticlePreview article={article} key={article.id} />;
    });
  }

  return (
    <>
      <h2>Latest articles</h2>
      <hr />
      {renderArticlePreviews()}
    </>
  );
}
