import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../actions/index";

export default function DetailedPlanets() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const swapidata = useSelector((state) => state.swapidata);
  const location = useLocation();
  const cathegory = `${location.pathname.split("/")[1]}/${
    location.pathname.split("/")[2]
  }`;
  useEffect(() => {
    dispatch(getAll(cathegory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cathegory]);
  if (swapidata?.length !== 0 && swapidata !== undefined) {
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
              {swapidata.name}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Période de rotation : {swapidata.rotation_period} heures
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Période d'orbite : {swapidata.orbital_period} jours
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Diamètre : {swapidata.diameter} km{" "}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              climat : {swapidata.climate}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Gravitée : {swapidata.gravity}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Terrains : {swapidata.terrain}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Présence d'eau à la surface :{" "}
              {swapidata.surface_water === "1" ? "oui" : "non"}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Population : {swapidata.population}
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
  } else {
    return (
      <div className={classes.box}>
        <Card className={classes.root} variant="outlined">
          <div className={classes.circle}>
            <Typography align="center" variant="h2">
              Cela peut prendre un peu de temps..
            </Typography>
            <br />
            <CircularProgress color="secondary" />
          </div>
        </Card>
      </div>
    );
  }
}
