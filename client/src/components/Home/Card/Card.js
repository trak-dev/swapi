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

export default function MediaCard() {
  const history = useHistory();
  const classes = useStyles();
  const [cathegories] = useState([
    {
      name: "films",
      description:
        "cliquez ici pour voir la liste de tout les films de la saga star Wars !",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
      apiname: "films",
    },
    {
      name: "personnages",
      description:
        " cliquez ici pour voir la liste de tout les personnages de la saga star Wars !",
      url: "https://www.lego.com/cdn/cs/set/assets/blt87cc12231eb0f16f/DarthVader_DCP_Sidekick-Tall1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
      apiname: "people",
    },
    {
      name: "espèces",
      description:
        "cliquez ici pour voir la liste de toutes les espèces de la saga star Wars !",
      url: "https://www.outdoorlife.com/app/uploads/2019/01/23/LRKQTDWTBHYTDVD37SOTHNSCQI.jpg",
      apiname: "species",
    },
    {
      name: "véhicules",
      description:
        "cliquez ici pour voir la liste de tout les véhicules de la saga star Wars !",
      url: "https://media.dondinojuguetes.es/product/vehiculos-e9-star-wars-800x800.jpg",
      apiname: "vehicles",
    },
    {
      name: "vaisseaux",
      description:
        "cliquez ici pour voir la liste de tout les vaisseaux de la saga star Wars !",
      url: "https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg",
      apiname: "starships",
    },
    {
      name: "planètes",
      description:
        "cliquez ici pour voir la liste de toutes les planètes de la saga star Wars !",
      url: "https://img1.starwars-holonet.com/holonet/dictionnaire/photos/planete_kamino.jpg",
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
