import React from "react";
import Link from "next/link";

export default function MachinePreview({ machine, length }) {
  if (machine.id == length) {
    return (
      <div className="carousel-item active">
        <Link href={`/machines/${machine.id}`}>
          <a target="_blank">
            <img src={machine.cover.url} className="d-block w-100" alt="..." />
          </a>
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="carousel-item">
        <Link href={`/machines/${machine.id}`}>
          <a target="_blank">
            <img src={machine.cover.url} className="d-block w-100" alt="..." />
          </a>
        </Link>
      </div>
    </>
  );
}
