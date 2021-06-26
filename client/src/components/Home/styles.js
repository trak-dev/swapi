import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    marginTop: "20px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  List: { width: "100%", maxWidth: 360 },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  gridItem: {
    display: "flex",
    marginTop: "2%",
    justifyContent: "center",
  },
}));
