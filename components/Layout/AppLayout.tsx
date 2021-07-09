import { AppBar, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  title: {
    height: "5rem",
    padding: "1rem",
  },
}));

interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const classes = useStyles();

  return (
    <Grid direction="column" className={classes.root}>
      <Grid item container justify="center" className={classes.title}>
        <Typography variant="h2">Debt Destroyer</Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default AppLayout;
