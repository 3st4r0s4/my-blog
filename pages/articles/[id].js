import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";

export default function ArticleDetails({ article }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(article.body);

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </>

    // <article>
    //   <header>
    //     <h1>{article.title}</h1>
    //     <p>{article.description}</p>
    //   </header>

    //   <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
    // </article>
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
        id: article.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
