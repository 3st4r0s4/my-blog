import React from "react";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <>
      <main>
        <section className="site-title">
          <div
            className="site-background"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Hacking & IT stuff</h3>
            <h1>Little Cyber Space</h1>

            <button
              onClick={() =>
                document.getElementById("latestMachines").scrollIntoView()
              }
              className="btn"
            >
              Latest Machines
            </button>

            <a href="/machines" target="_blank">
              <button className="btn">All Machines</button>
            </a>

            <a href="/challenges" target="_blank">
              <button className="btn">Challenges</button>
            </a>

            <a href="/wh04m1" target="_blank">
              <button className="btn">Whoami</button>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
