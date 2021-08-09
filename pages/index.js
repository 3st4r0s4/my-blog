import axios from "axios";
import React from "react";
import Head from "next/head";
import HomeHeader from "../components/HomeHeader";
import HomeLatestArticles from "../components/HomeLatestArticles";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeHeader />
      <HomeLatestArticles articles={articles} />
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles`
  );

  return {
    props: {
      articles: response.data,
    },
  };
}
