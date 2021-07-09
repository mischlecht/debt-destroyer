import {
  Button,
  Card,
  Grid,
  Input,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { DebtType } from '../../types/debt'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '11rem',
    height: '11rem',
    padding: '1rem',
  },
}))

interface DebtProps {
  debt: DebtType
}

const Debt = ({ debt }: DebtProps) => {
  const classes = useStyles()
  const [isEditing, setIsEditing] = useState<boolean>(true)
  const [title, setTitle] = useState(debt.title)
  const [balance, setBalance] = useState(debt.balance)
  const [interestRate, setInterestRate] = useState(debt.interestRate)
  const [minimumPayment, setMinimumPayment] = useState(debt.minimumPayment)

  const validationSchema = yup.object({
    title: yup.string().required('A DEBT TITLE is required'),
    balance: yup.number().min(0.01).required('A BALANCE is required'),
    interestRate: yup
      .number()
      .min(0.000001)
      .required('An INTEREST RATE is required'),
    minimumPayment: yup
      .number()
      .min(0.01)
      .required('A MINIMUM PAYMENT is required'),
  })

  const formik = useFormik({
    initialValues: {
      title,
      balance,
      interestRate,
      minimumPayment,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const renderDebtData = () => {
    return (
      <Grid container direction="column" justify="space-around">
        <Grid item container justify="space-between">
          <Typography variant="h5">{title}</Typography>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </Grid>
        <Grid item container justify="space-between">
          <Typography variant="body1">Balance:</Typography>
          <Typography> {balance}</Typography>
        </Grid>
        <Grid item container justify="space-between">
          <Typography variant="body1">Interest Rate:</Typography>
          <Typography> {interestRate}</Typography>
        </Grid>
        <Grid item container justify="space-between">
          <Typography variant="body1">Minimum Payment</Typography>
          <Typography> {minimumPayment}</Typography>
        </Grid>
      </Grid>
    )
  }

  const renderEditDebt = () => {
    return (
      <Grid container direction="column" justify="space-around">
        <Button onClick={() => setIsEditing(false)}>Save</Button>
        <TextField
          label={'Title'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant={'outlined'}
        />
        <TextField
          label={'Balance'}
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
          variant={'outlined'}
        />
        <TextField
          label={'Interest Rate'}
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          variant={'outlined'}
        />
        <TextField
          label={'Minimum Payment'}
          value={minimumPayment}
          onChange={(e) => setMinimumPayment(Number(e.target.value))}
          variant={'outlined'}
        />
      </Grid>
    )
  }

  return (
    <Card className={classes.root}>
      {isEditing ? renderEditDebt() : renderDebtData()}
    </Card>
  )
}

export default Debt
