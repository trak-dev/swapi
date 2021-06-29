import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: 20,
    minWidth: 286,
  },
  more: { margin: 10 },
  Grid: {
    height: "inherit",
    display: "flex",
    justifyContent: "center",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    height: "80vh",
  },
  searchbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "1%",
  },
  search: { width: "80%" },
  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
