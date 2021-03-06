import React from "react";
import Link from "next/link";

export default function CtfsHome() {
  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">HTB</h5>
          <Link href="ctfs/htb">
            <a className="nav-link">Go Here</a>
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
        }
        .nav-link {
          font-size: 20px;
        }
      `}</style>
    </>
  );
}
