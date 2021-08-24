import React from "react";
import axios from "axios";
import WebChallengesList from "../../../components/WebChallengesList";

export default function index({ wchs }) {
  return (
    <>
      <h1>Web Challenges</h1>
      <WebChallengesList wchs={wchs} />
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
