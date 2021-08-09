import React from "react";
import Link from "next/link";

export default function ArticlePreview({ article }) {
  console.log(article.cover.url);
  return (
    <>
      <div className="card  ">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`}
          className="card-img-top"
          width={480}
          height={400}
          alt=""
        ></img>
        <div className="card-body">
          <h4 className="card-title">{article.title}</h4>
          <h6>Published at: {article.published_at.substring(0, 10)}</h6>
          <p className="card-text">{article.description}</p>
          <Link href={`/articles/${article.id}`}>
            <a className="btn btn-primary">Read more</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          margin-bottom: 30px;
          border-radius: 5px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
        }
      `}</style>
    </>
  );
}
