import axios from "axios";
import React from "react";
import Head from "next/head";
import ReactPlayer from "react-player";

export default function HtbCtfDetails({ htbctf }) {
  let coverUrl =
    "https://res.cloudinary.com/dyprhgcnc/image/upload/v1630009781/web02_Cover_af3904298b.jpg";

  let videoUrl =
    "https://res.cloudinary.com/dyprhgcnc/video/upload/v1630009818/Web02_Final_69d5ef83e5.mp4";
  return (
    <>
      <Head>
        <title>{htbctf.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <article>
        <header>
          <h1>{htbctf.title}</h1>
        </header>

        <section>
          <ReactPlayer
            width={"100%"}
            height={"auto"}
            url={htbctf.video[0].url}
            controls
          />
        </section>
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const challengeResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/Htbs/${params.id}`
  );

  const data = challengeResponse.data;

  console.log(data);

  return {
    props: {
      htbctf: data,
    },
  };
}

export async function getStaticPaths() {
  const challengeResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/Htbs`
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
