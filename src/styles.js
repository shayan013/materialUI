import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
  icon: {
    marginRight: "20px",
  },
  btn: {
    marginTop: "40px",
  },
  grid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    paddingTop: "56%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: "50px 0",
    backgroundColor: theme.palette.background.paper,
  },
}));
export default styles;
