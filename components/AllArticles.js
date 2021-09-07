import React from "react";
import ArticlePreview from "./MachinePreview";

export default function AllArticles({ machines }) {
  function renderArticlePreviews() {
    machines.sort((a, b) => b.id - a.id);

    return articles.map((machine) => {
      return <MachinePreview machine={machine} key={machine.id} />;
    });
  }

  return (
    <>
      <h2>Machines</h2>

      {renderArticlePreviews()}
    </>
  );
}
