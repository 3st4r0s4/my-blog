import React from "react";
import axios from "axios";
import HtbCtfsList from "../../../components/HtbCtfsList";

export default function index({ ctfs }) {
  return (
    <>
      <h1>HTB CTFs</h1>
      <HtbCtfsList ctfs={ctfs} />
    </>
  );
}

export async function getStaticProps() {
  const challengesResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/Htbs`
  );

  return {
    props: {
      ctfs: challengesResponse.data,
    },
  };
}
