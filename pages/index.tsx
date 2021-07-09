import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import Debt from "../components/Inputs/Debt";
import { DebtType } from "../types/debt";
import { MockDebts, NewDebt } from "../mock-data/debts";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  addButton: {
    marginLeft: "1rem",
    padding: "0.5rem",
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    border: "1px solid gray",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [debts, setDebts] = useState<DebtType[]>(MockDebts);

  const handleAddDebt = () => {
    setDebts(debts.concat(NewDebt));
  };

  return (
    <Grid container direction="column">
      <Grid item container alignItems="center">
        <Typography variant="h4">Your Debts:</Typography>
        <Button className={classes.addButton} onClick={handleAddDebt}>
          <Add />
        </Button>
      </Grid>
      <Grid item container>
        {debts.map((debt) => (
          <Debt debt={debt} />
        ))}
      </Grid>
    </Grid>
  );
};

export default HomePage;
