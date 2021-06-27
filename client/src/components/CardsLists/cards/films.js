import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

export default function Films() {
  const [number] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid container className={classes.Grid} xl>
      {number.map((number) => {
        return (
          <Grid item xs={9} sm={6} md={4} key={number.id}>
            <Card className={classes.root} variant="outlined">
              <CardActionArea
                onClick={() => {
                  history.push(`/films/${number.id}`);
                }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    className={classes.title}
                    gutterBottom
                    align="center"
                  >
                    titre du film
                  </Typography>
                  <Typography variant="h6">numero d'épisode : 4</Typography>
                  <Typography variant="h6">Directeur : George Lucas</Typography>
                  <Typography variant="h6">
                    producteurs : George Lucas
                  </Typography>
                  <Typography variant="h6">
                    Date de sortie : 2020/18/12
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
      })}
    </Grid>
  );
}
