import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MachineCard({ machine }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a href={`/machines/${machine.id}`}>
          <CardMedia
            component="img"
            alt={machine.title}
            height="140"
            image={machine.cover.url}
            title={machine.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {machine.title}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
}
