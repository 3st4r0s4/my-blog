import React from "react";
import Head from "next/head";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function whoami() {
  return (
    <>
      <Head>
        <title>Wh04m1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div class="myContainer">
        <header>
          <strong>Who am I?</strong>
        </header>
        <section>I am a Big Reader, Cyber Enthusiast and Nerd.</section>

        <footer>
          <div className="socials">
            <strong>Reach Me</strong>
            <br />
            <SocialIcon
              className="socialsIcon"
              target="_blank"
              url="https://instagram.com/exploitcompleted"
            />
          </div>
        </footer>
      </div>
    </>
  );
}
