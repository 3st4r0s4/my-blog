import React from "react";
import WebChPreview from "./WebChPreview";
import Grid from "@material-ui/core/Grid";

export default function WebChallengesList({ wchs }) {
  function renderWchPreviews() {
    wchs.sort((a, b) => b.id - a.id);
    return wchs.map((wch) => {
      return (
        <Grid key={wch.id} item xs={12} sm={6} md={3} lg={4}>
          <WebChPreview wch={wch} key={wch.id} />
        </Grid>
      );
    });
  }

  return (
    <>
      <Grid spacing={2} container>
        {renderWchPreviews()}
      </Grid>
    </>
  );
}
