import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function whoami() {
  return (
    <>
      <Head>
        <title>Wh04m1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <strong>Who am I?</strong>
      </header>
      <section>I am a Big Reader, Cyber Enthusiast and Nerd.</section>
      <footer>
        <Link href="#">
          <a className="fa fa-facebook"></a>
        </Link>
      </footer>
    </>
  );
}
