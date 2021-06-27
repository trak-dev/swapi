import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: 20,
    minWidth: 286,
    maxWidth: "80%",
  },
  box: { display: "flex", justifyContent: "center" },
  exit: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: "25px",
  },
  intro: {
    marginTop: "10px",
  },
}));
