import React from "react";
import Head from "next/head";
import ChallengesHome from "../../components/ChallengesHome";

export default function index() {
  return (
    <>
      <Head>
        <title>Challenges</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChallengesHome />
    </>
  );
}
