import React from "react";
import ArticlePreview from "./ArticlePreview";

export default function AllArticles({ articles }) {
  function renderArticlePreviews() {
    articles.sort((a, b) => (a.id > b.id ? 1 : -1));
    return articles.map((article) => {
      return <ArticlePreview article={article} key={article.id} />;
    });
  }

  return (
    <>
      <h2>Articles</h2>

      {/* <form className="d-flex">
        <input
          onKeyUp={searchArticle}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <hr />
      <br /> */}
      {renderArticlePreviews()}
    </>
  );

  function searchArticle() {}
}
