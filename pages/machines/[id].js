import axios from "axios";
import React from "react";
import Head from "next/head";
import ReactPlayer from "react-player";
import MarkdownIt from "markdown-it";

export default function MachineDetails({ machine }) {
  if (machine.video.length == 0) {
    const md = new MarkdownIt();
    const htmlContent = md.render(machine.body);
    return (
      <>
        <Head>
          <title>{machine.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="myContainer">
          <article>
            <header>
              <h1>{machine.title}</h1>
              <p>{machine.description}</p>
            </header>

            <section
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></section>
          </article>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{machine.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="myContainer">
        <article>
          <header>
            <h1>{machine.title}</h1>
          </header>

          <section>
            <ReactPlayer
              width={"100%"}
              height={"auto"}
              url={machine.video[0].url}
              controls
            />
          </section>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const machineResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/machines/${params.id}`
  );

  const data = machineResponse.data;

  return {
    props: {
      machine: data,
    },
  };
}

export async function getStaticPaths() {
  const machineResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/machines`
  );

  const paths = machineResponse.data.map((machine) => {
    return {
      params: {
        id: machine.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
