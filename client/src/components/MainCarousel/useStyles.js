import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: "none",
    marginBottom: 50,
  },
  slider: {
    minHeight: 200,
  },
  block: {
    marginTop: -250,
    width: "50%",
    marginLeft: 33,

    [theme.breakpoints.down("sm")]: {
      marginTop: -150,
    },
  },
  paragraph: {
    // textDecoration: 'none',
    textAlign: "left",
    color: "#989898",
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 14,
    },
  },
  title: {
    color: "#000000",
    textTransform: "capitalize",
  },
  actionButton: {
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    height: 50,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      paddingLeft: 10,
      paddingRight: 10,
      height: 30,
    },
  },
}));

export default useStyles;
