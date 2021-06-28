import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../actions/index";

export default function Films() {
  const swapidata = useSelector((state) => state.swapidata);
  const dispatch = useDispatch();
  const history = useHistory();
  const cathegory = "films";
  const classes = useStyles();
  useEffect(() => {
    dispatch(getAll(cathegory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cathegory]);
  if (swapidata?.length !== 0 && swapidata !== undefined) {
    return (
      <Grid container className={classes.Grid} xl>
        {swapidata?.map((swapidata) => {
          return swapidata?.results?.map((swapidata) => {
            return (
              <Grid item xs={9} sm={6} md={4} key={swapidata.title}>
                <Card className={classes.root} variant="outlined">
                  <CardActionArea
                    onClick={() => {
                      history.push(`/people/${swapidata.title}`);
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h4"
                        className={classes.title}
                        gutterBottom
                        align="center"
                      >
                        {swapidata.title}
                      </Typography>
                      <Typography variant="h6">
                        Numero d'épisode : {swapidata.episode_id}
                      </Typography>
                      <Typography variant="h6">
                        Directeur : {swapidata.director}
                      </Typography>
                      <Typography variant="h6">
                        Producteurs : {swapidata.producer}
                      </Typography>
                      <Typography variant="h6">
                        Date de sortie : {swapidata.release_date}
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
        })}
      </Grid>
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
}
