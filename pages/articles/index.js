import axios from "axios";
import React from "react";
import AllArticles from "../../components/AllArticles";
import Head from "next/head";

export default function articles({ articles }) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AllArticles articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const articlesResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles`
  );

  return {
    props: {
      articles: articlesResponse.data,
    },
  };
}
