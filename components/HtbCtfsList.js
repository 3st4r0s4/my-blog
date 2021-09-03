import React from "react";
import CtfPreview from "./CtfPreview";

export default function HtbCtfsList({ ctfs }) {
  function renderHtbCtfPreviews() {
    ctfs.sort((a, b) => b.id - a.id);
    return ctfs.map((ctf) => {
      return <CtfPreview ctf={ctf} key={ctf.id} />;
    });
  }

  return <>{renderHtbCtfPreviews()}</>;
}
