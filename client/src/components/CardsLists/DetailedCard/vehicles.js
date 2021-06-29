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

export default function DetailedVehicles() {
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
              Modèle : {swapidata.model}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Fabricants : {swapidata.manufacturer}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Cout total : {swapidata.cost_in_credits} crédits
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Longueur : {swapidata.length} m
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Vitesse max en atmosphère : {swapidata.max_atmosphering_speed}{" "}
              km/h
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Equipage : {swapidata.crew} personnes
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Passagers : {swapidata.passengers} personnes
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Contenance du reservoir : {swapidata.cargo_capacity} Litres
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              Durée de vie des consommables : {swapidata.consumables}
            </Typography>{" "}
            <Typography variant="h6" className={classes.intro}>
              Classe du véhicule : {swapidata.vehicle_class}
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
