import React from "react";
import Link from "next/link";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import MachineCard from "./MachineCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function MachinesHome({ machines }) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function renderMachinesCards() {
    machines.sort((a, b) => b.id - a.id);
    return machines.map((machine) => {
      return (
        <Grid key={machine.id} item xs={12} sm={6} md={3} lg={4}>
          <MachineCard machine={machine} />
        </Grid>
      );
    });
  }

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        {renderMachinesCards()}
      </Grid>
    </>
  );
}
