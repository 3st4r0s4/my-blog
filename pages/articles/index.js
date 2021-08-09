import axios from "axios";
import React from "react";
import AllArticles from "../../components/AllArticles";

export default function articles({ articles }) {
  return (
    <>
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
