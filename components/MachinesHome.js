import React from "react";
import Link from "next/link";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import MachineCard from "./MachineCard";
import Container from "@material-ui/core/Container";

export default function MachinesHome({ machines }) {
  function renderMachinesCards() {
    machines.sort((a, b) => b.id - a.id);
    return machines.map((machine) => {
      return (
        <Grid key={machine.id} item xs={12} md={3} lg={4}>
          <MachineCard machine={machine} />
        </Grid>
      );
    });
  }

  return (
    <>
      <Grid container spacing={3}>
        {renderMachinesCards()}
      </Grid>
    </>
  );
}
