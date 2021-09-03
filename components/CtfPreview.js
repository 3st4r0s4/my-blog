import React from "react";
import Link from "next/link";

export default function CtfPreview({ ctf }) {
  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h4 className="card-title">{ctf.title}</h4>
          <img
            src={`${ctf.cover.url}`}
            className="card-img-top"
            width={50}
            height={50}
            alt=""
          ></img>
          <hr />
          <h6>Published at: {ctf.published_at.substring(0, 10)}</h6>

          <Link href={`/ctfs/htb/${ctf.id}`}>
            <a className="btn btn-primary">See more</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          margin-bottom: 30px;
          border-radius: 5px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          background-color: honeydew;
        }
        .card-title {
          font-size: 30px;
          font-weight: bold;
          padding-bottom: 5px;
        }
        .nav-link {
          font-size: 20px;
        }
      `}</style>
    </>
  );
}
