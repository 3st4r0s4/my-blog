import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
import Head from "next/head";

export default function WebDetails({ ch }) {
  return (
    <>
      <Head>
        <title>{ch.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <article>
        <header>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>

        <section>
          <video
            className={`${videoPublicId.length === 0 ? "hidden" : "block m-4"}`}
            autoPlay
            controls
            muted
            src={`${ch.video}`}
          ></video>
        </section>
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const challengeResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/challenges/web/${params.id}`
  );

  return {
    props: {
      ch: challengeResponse.data,
    },
  };
}

export async function getStaticPaths() {
  const challengeResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/challenges/web`
  );

  const paths = challengeResponse.data.map((ch) => {
    return {
      params: {
        id: ch.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
