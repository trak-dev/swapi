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

export default function DetailedPeople() {
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
            <Typography variant="h6" mt={6}>
              Numero d'épisode : {swapidata.name}
            </Typography>
            <Typography variant="h6">taille : {swapidata.height} cm</Typography>
            <Typography variant="h6">poid : {swapidata.mass} kg</Typography>
            <Typography variant="h6">
              couleur de cheuveux : {swapidata.hair_color}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              couleur de peaux : {swapidata.skin_color}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              couleur des yeux : {swapidata.gender}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              année de naissance : {swapidata.eye_color}
            </Typography>
            <Typography variant="h6" className={classes.intro}>
              genre : {swapidata.birth_year}
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
