import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Little Cyber Space
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" data-toggle="tab" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/articles">
                <a className="nav-link" data-toggle="tab">
                  Articles
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/ctfs">
                <a className="nav-link" data-toggle="tab">
                  CTFs
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/challenges">
                <a className="nav-link" data-toggle="tab">
                  Challenges
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/wh04m1">
                <a className="nav-link" data-toggle="tab">
                  Wh04m1
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
