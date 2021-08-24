import React from "react";
import Link from "next/link";

export default function ChallengesHome() {
  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">WEB</h5>
          <p className="card-text">Web related challenges.</p>
          <Link href="challenges/Web-challenges">
            <a className="nav-link">Go Here</a>
          </Link>
        </div>
      </div>
    </>
  );
}
