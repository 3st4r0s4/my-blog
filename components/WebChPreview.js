import React from "react";
import Link from "next/link";

export default function WebChPreview({ wch }) {
  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h4 className="card-title">{wch.title}</h4>
          <h6>Published at: {wch.published_at.substring(0, 10)}</h6>

          <Link href={`/challenges/Web-challenges/${wch.id}`}>
            <a className="btn btn-primary">See more</a>
          </Link>
        </div>
      </div>
    </>
  );
}
