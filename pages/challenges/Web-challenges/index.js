import React from "react";
import axios from "axios";
import WebChallengesList from "../../../components/WebChallengesList";

export default function index({ wchs }) {
  console.log(wchs);
  function renderWebChsPreviews() {
    wchs.sort((a, b) => b.id - a.id);
    return wchs.map((wch) => {
      return <WebChallengesList wch={wch} key={wch.id} />;
    });
  }

  return (
    <>
      <h1>Web Challenges</h1>
      {renderWebChsPreviews()}
    </>
  );
}

export async function getStaticProps() {
  const challengesResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/Web-challenges`
  );

  return {
    props: {
      wchs: challengesResponse.data,
    },
  };
}
