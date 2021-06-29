import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../actions/index";

export default function Starships() {
  const swapidata = useSelector((state) => state.swapidata);
  const dispatch = useDispatch();
  const history = useHistory();
  const cathegory = "starships";
  const classes = useStyles();
  useEffect(() => {
    dispatch(getAll(cathegory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cathegory]);
  const [search, setSearch] = useState("");
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      dispatch(getAll(`${cathegory}/${search}`));
    }
  };
  if (swapidata?.length !== 0 && swapidata !== undefined) {
    if (Array.isArray(swapidata) === true) {
      return (
        <div>
          <div className={classes.searchbar}>
          <Typography variant="h4">
              &uarr; cliquez ici pour revenir à l'accueil ! &uarr;
            </Typography>
            <TextField
              className={classes.search}
              onKeyDown={handleKeyPress}
              name="search"
              variant="outlined"
              label="Votre recherche ici..."
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Grid container className={classes.Grid} xl>
            {swapidata?.map((swapidata) => {
              if (swapidata.count === 0) {
                return (
                  <h2 key={"unique"}>
                    Aucun résultat ne correspond à votre recherche
                  </h2>
                );
              } else {
                return swapidata?.results?.map((swapidata) => {
                  return (
                    <Grid item xs={9} sm={6} md={4} key={swapidata.name}>
                      <Card className={classes.root} variant="outlined">
                        <CardActionArea
                          onClick={() => {
                            history.push(
                              `/${cathegory}/${swapidata.url.split("/")[5]}`
                            );
                          }}
                        >
                          <CardContent>
                            <Typography
                              variant="h4"
                              className={classes.title}
                              gutterBottom
                              align="center"
                            >
                              {swapidata.name}
                            </Typography>
                            <Typography variant="h6">
                              Modele : {swapidata.model}
                            </Typography>
                            <Typography variant="h6">
                              Fabriquants : {swapidata.manufacturer}
                            </Typography>
                            <Typography variant="h6">
                              Classe : {swapidata.starship_class}
                            </Typography>
                            <Typography variant="h6">
                              Longueur : {swapidata.length}m
                            </Typography>
                          </CardContent>
                          <Typography
                            size="small"
                            color="textSecondary"
                            className={classes.more}
                          >
                            Cliquer pour en savoir Plus
                          </Typography>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                });
              }
            })}
          </Grid>
        </div>
      );
    } else {
      return (
        <div className={classes.loading}>
          <Typography variant="h2" align="center">
            Chargement , cela peut prendre du temps
          </Typography>
          <CircularProgress color="secondary" />
        </div>
      );
    }
  } else {
    return (
      <div className={classes.loading}>
        <Typography variant="h2" align="center">
          Chargement , cela peut prendre du temps
        </Typography>
        <CircularProgress color="secondary" />
      </div>
    );
  }
}
