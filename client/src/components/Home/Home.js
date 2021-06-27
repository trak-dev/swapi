import React from "react";
import { Typography, Container } from "@material-ui/core";
import MediaCard from "./Card/Card";
import useStyles from "./styles";

export default function Navbar() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" height="100%" className={classes.box}>
      <Typography className={classes.title} variant="h2">
        Que souhaitez vous voir ?
      </Typography>
      <MediaCard />
    </Container>
  );
}
