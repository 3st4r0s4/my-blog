import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <h2>Nothing here! Redirecting to the Home page ...</h2>
    </>
  );
}
