import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import MediaCard from "./Card/Card";
import useStyles from "./styles";

export default function Navbar() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" height="100%" className={classes.box}>
      <Typography className={classes.title} variant="h2">
        Que shouaitez vous voir ?
      </Typography>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        spacing={3}
        className={classes.gridContainer}
      >
        <Grid item xs={9} sm={6} md={3} className={classes.gridItem}>
          <MediaCard />
        </Grid>
        <Grid item xs={9} sm={6} md={3} className={classes.gridItem}>
          <MediaCard />
        </Grid>
        <Grid item xs={9} sm={6} md={3} className={classes.gridItem}>
          <MediaCard />
        </Grid>
        <Grid item xs={9} sm={6} md={3} className={classes.gridItem}>
          <MediaCard />
        </Grid>
        <Grid item xs={9} sm={6} md={3} className={classes.gridItem}>
          <MediaCard />
        </Grid>
        <Grid item xs={9} sm={6} md={3} className={classes.gridItem}>
          <MediaCard />
        </Grid>
      </Grid>
    </Container>
  );
}
