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

export default function People() {
  const swapidata = useSelector((state) => state.swapidata);
  const dispatch = useDispatch();
  const history = useHistory();
  const cathegory = "people";
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
                        Sexe : {swapidata.gender}
                      </Typography>
                      <Typography variant="h6">
                        taille : {swapidata.height}cm
                      </Typography>
                      <Typography variant="h6">
                        Année de naissance : {swapidata.birth_year}
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
