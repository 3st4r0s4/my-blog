import React from "react";
import WebChPreview from "./WebChPreview";

export default function WebChallengesList({ wchs }) {
  function renderWchPreviews() {
    return wchs.map((wch) => {
      return <WebChPreview wch={wch} key={wch.id} />;
    });
  }

  return <>{renderWchPreviews()}</>;
}
