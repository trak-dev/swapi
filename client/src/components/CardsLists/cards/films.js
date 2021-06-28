import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../actions/index";

export default function Films() {
  const swapidata = useSelector((state) => state.swapidata.results);
  // const moredata = useSelector((state) => state.moredata);
  const dispatch = useDispatch();
  const history = useHistory();
  const cathegory = "films";
  const classes = useStyles();
  useEffect(() => {
    dispatch(getAll(cathegory));
    // dispatch(getMore("planets", swapidata?.[0].planets[0].split("/")[5]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cathegory]);
  // console.log("planets", swapidata?.[0].planets[0].split("/")[5]);
  // console.log(moredata);
  return (
    <Grid container className={classes.Grid} xl>
      {swapidata?.map((swapidata) => {
        return (
          <Grid item xs={9} sm={6} md={4} key={swapidata.episode_id}>
            <Card className={classes.root} variant="outlined">
              <CardActionArea
                onClick={() => {
                  history.push(`/films/${swapidata.episode_id}`);
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
                  {/* <Typography variant="h6">
                    <a href={swapidata.planets[0]}>Liens planete </a>
                  </Typography> */}
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
      })}
    </Grid>
  );
}
