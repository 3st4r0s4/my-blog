import axios from "axios";
import React from "react";
import Head from "next/head";
import HomeHeader from "../components/HomeHeader";
import HomeLatestMachines from "../components/HomeLatestMachines";

export default function Home({ machines }) {
  return (
    <>

      {/* <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeHeader />
      <HomeLatestMachines machines={machines} /> */}

      <img src="uc.jpg"></img>
    </>
  );
}

// export async function getStaticProps() {
//   const response = await axios.get(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/machines`
//   );

//   return {
//     props: {
//       machines: response.data,
//     },
//   };
// }
