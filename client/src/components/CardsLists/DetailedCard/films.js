import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory, useLocation } from "react-router-dom";

export default function DetailedFilms() {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  return (
    <div className={classes.box}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            variant="h4"
            className={classes.title}
            gutterBottom
            align="center"
          >
            titre du film
          </Typography>
          <Typography variant="h6" mt={6}>
            numero d'épisode : 4
          </Typography>
          <Typography variant="h6">Directeur : George Lucas</Typography>
          <Typography variant="h6">producteurs : George Lucas</Typography>
          <Typography variant="h6">Date de sortie : 2020/18/12</Typography>
          <Typography variant="h6" className={classes.intro}>
            Intro : It is a period of civil war.{"\r"}
            {"\n"}Rebel spaceships, striking{"\r"}
            {"\n"}from a hidden base, have won{"\r"}
            {"\n"}their first victory against{"\r"}
            {"\n"}the evil Galactic Empire.{"\r"}
            {"\n"}
            {"\r"}
            {"\n"}During the battle, Rebel{"\r"}
            {"\n"}spies managed to steal secret
            {"\r"}
            {"\n"}plans to the Empire's{"\r"}
            {"\n"}ultimate weapon, the DEATH
            {"\r"}
            {"\n"}STAR, an armored space{"\r"}
            {"\n"}station with enough power
            {"\r"}
            {"\n"}to destroy an entire planet.{"\r"}
            {"\n"}
            {"\r"}
            {"\n"}Pursued by the Empire's{"\r"}
            {"\n"}sinister agents, Princess{"\r"}
            {"\n"}Leia races home aboard her{"\r"}
            {"\n"}starship, custodian of the{"\r"}
            {"\n"}stolen plans that can save her{"\r"}
            {"\n"}people and restore{"\r"}
            {"\n"}freedom to the galaxy....
          </Typography>
        </CardContent>
        <CardActions className={classes.exit}>
          <Button
            size="large"
            variant="contained"
            color="default"
            onClick={() => {
              history.push(`/${location.pathname.split("/")[1]}`);
            }}
          >
            Revenir à la liste
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
