import React from "react";
import WebChPreview from "./WebChPreview";

export default function HtbCtfsList({ htbctfs }) {
  function renderHtbCtfPreviews() {
    htbctfs.sort((a, b) => b.id - a.id);
    return htbctfs.map((htbctf) => {
      return <WebChPreview wch={htbctf} key={htbctf.id} />;
    });
  }

  return <>{renderHtbCtfPreviews()}</>;
}
