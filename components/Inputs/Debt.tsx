import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { DebtType } from "../../types/debt";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "11rem",
    height: "11rem",
    padding: "1rem",
  },
}));

interface DebtProps {
  debt: DebtType;
}

const Debt = ({
  debt: { title, balance, interestRate, minimumPayment },
}: DebtProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container direction="column" justify="space-around">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">Balance: {balance}</Typography>
        <Typography variant="body1">Interest Rate: {interestRate}</Typography>
        <Typography variant="body1">
          Minimum Payment: {minimumPayment}
        </Typography>
      </Grid>
    </Card>
  );
};

export default Debt;
