import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  nav: {
    flexGrow: 4,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Yann Picaud SWAPI !
          </Typography>
          <div>
            <Typography variant="h8" className={classes.nav}>
              Films
            </Typography>
            <Typography variant="h8" className={classes.nav}>
              Planetes
            </Typography>
            <Typography variant="h8" className={classes.nav}>
              Personnages
            </Typography>
            <Typography variant="h8" className={classes.nav}>
              Vaisseaux
            </Typography>
            <Typography variant="h8" className={classes.nav}>
              Véhicules
            </Typography>
            <Typography variant="h8" className={classes.nav}>
              Especes
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
