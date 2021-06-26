import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

export default function MediaCard() {
  const history = useHistory();
  const classes = useStyles();
  const open = (e) => {
    history.push(`/posts`);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={open}>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Films
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Liste de tout les films de la saga star wars , directeur ,
            producteur et plus !
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
