import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minHeight: 300,
    marginTop: "10%",
  },
  media: {
    height: 200,
  },
  gridItem: {
    display: "flex",
    marginTop: "2%",
    justifyContent: "center",
  },
  giantGrid: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});
export default useStyles;
