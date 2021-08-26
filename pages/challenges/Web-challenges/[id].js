import axios from "axios";
import React from "react";
import Head from "next/head";
import ReactPlayer from "react-player";

export default function WebDetails({ wch }) {
  let videoUrl = wch.video.url;
  let preview = wch.cover.url;
  return (
    <>
      <Head>
        <title>{wch.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <article>
        <header>
          <h1>{wch.title}</h1>
        </header>

        <section>
          <ReactPlayer
            width={"100%"}
            height={"auto"}
            light={preview}
            url={videoUrl}
            controls
          />
        </section>
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const challengeResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/Web-challenges/${params.id}`
  );

  return {
    props: {
      wch: challengeResponse.data,
    },
  };
}

export async function getStaticPaths() {
  const challengeResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/Web-challenges`
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
