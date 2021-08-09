import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";

export default function ArticleDetails({ article }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(article.body);

  return (
    <article>
      <header>
        <h1>{article.title}</h1>
        <h2>{article.description}</h2>
      </header>

      <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
    </article>
  );
}

export async function getStaticProps({ params }) {
  const articleResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles/${params.id}`
  );

  return {
    props: {
      article: articleResponse.data,
    },
  };
}

export async function getStaticPaths() {
  const articlesResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles`
  );

  const paths = articlesResponse.data.map((article) => {
    return {
      params: {
        title: article.title.toString().toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
