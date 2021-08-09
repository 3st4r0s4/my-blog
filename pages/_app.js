import NavBar from "../components/NavBar";
import "../styles/globals.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Head>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>

      <style jsx>{`
        .container {
          padding-top: 30px;
        }
      `}</style>
    </>
  );
}

export default MyApp;
