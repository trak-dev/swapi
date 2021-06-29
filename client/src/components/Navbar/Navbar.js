import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h4" noWrap>
            <Link
              color="inherit"
              underline="none"
              className={classes.link}
              onClick={() => {
                history.push("/");
              }}
            >
              SWAPI - YANN PICAUD
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
