import React from "react";

export default function WebChallengesList({ wchs }) {
  function renderWchPreviews() {
    wchs.sort((a, b) => b.id - a.id);
    return wchs.map((wch) => {
      return <ArticlePreview wch={wch} key={wch.id} />;
    });
  }

  return <>{renderWchPreviews()}</>;
}
