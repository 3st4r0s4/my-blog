// import React from "react";
// import axios from "axios";
// import Head from "next/head";
// import MachinesHome from "../../components/MachinesHome";

// export default function index({ machines }) {
//   return (
//     <>
//       <Head>
//         <title>Machines</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <div className="myContainer">
//         {/* <h2>TODO: Listing all machines and code a filter feature</h2> */}
//         <h1>All Machines</h1>
//         <br />
//         <MachinesHome machines={machines} />
//       </div>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const machinesResponse = await axios.get(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/machines`
//   );

//   return {
//     props: {
//       machines: machinesResponse.data,
//     },
//   };
// }
