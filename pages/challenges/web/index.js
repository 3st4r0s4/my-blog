import React from "react";
import axios from "axios";

export default function index({ chs }) {
  return (
    <>
      <h1>WEB CHALLENGES CARDS LIST HERE</h1>
      {chs.map((ch) => {
        console.log(ch.title);
        return <h1 ch={ch} key={ch.id} />;
      })}
    </>
  );
}

export async function getStaticProps() {
  const challengesResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/challenges`
  );

  return {
    props: {
      chs: challengesResponse.data,
    },
  };
}
