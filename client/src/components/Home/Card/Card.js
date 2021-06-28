import React, { useState } from "react";
import {
  Grid,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import logo from "../../../images/logo.png";
import chewbaca from "../../../images/chewbaca.jpg";
import moto from "../../../images/moto.jpg";
import planete from "../../../images/planete.jpg";
import vader from "../../../images/vader.jpeg";
import vaisseau from "../../../images/vaisseau.jpg";

export default function MediaCard() {
  const history = useHistory();
  const classes = useStyles();
  const [cathegories] = useState([
    {
      name: "films",
      description:
        "cliquez ici pour voir la liste de tout les films de la saga star Wars !",
      url: logo,
      apiname: "films",
    },
    {
      name: "personnages",
      description:
        " cliquez ici pour voir la liste de tout les personnages de la saga star Wars !",
      url: vader,
      apiname: "people",
    },
    {
      name: "espèces",
      description:
        "cliquez ici pour voir la liste de toutes les espèces de la saga star Wars !",
      url: chewbaca,
      apiname: "species",
    },
    {
      name: "véhicules",
      description:
        "cliquez ici pour voir la liste de tout les véhicules de la saga star Wars !",
      url: moto,
      apiname: "vehicles",
    },
    {
      name: "vaisseaux",
      description:
        "cliquez ici pour voir la liste de tout les vaisseaux de la saga star Wars !",
      url: vaisseau,
      apiname: "starships",
    },
    {
      name: "planètes",
      description:
        "cliquez ici pour voir la liste de toutes les planètes de la saga star Wars !",
      url: planete,
      apiname: "planets",
    },
  ]);
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      spacing={3}
      className={classes.giantGrid}
    >
      {cathegories.map((cathegories) => {
        return (
          <Grid item xs={9} sm={6} md={3} key={cathegories.name}>
            <Card className={classes.root}>
              <CardActionArea
                onClick={() => {
                  history.push(`/${cathegories.apiname}`);
                }}
              >
                <CardMedia
                  className={classes.media}
                  image={cathegories.url}
                  title={cathegories.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {cathegories.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {cathegories.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
