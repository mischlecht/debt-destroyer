import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import Debt from "../components/Inputs/Debt";
import { DebtType } from "../types/debt";
import mockDebts from "../mock-data/debts";

const HomePage = () => {
  const [debts, setDebts] = useState<DebtType[]>(mockDebts);

  return (
    <Grid container direction="column">
      <Grid item container justify="space-between">
        <Typography variant="h4">Your Debts:</Typography>
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
