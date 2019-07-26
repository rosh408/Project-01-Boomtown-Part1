const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
    background: theme.palette.secondary.main,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing.unit * 10
    }
  }
});

export default styles;
