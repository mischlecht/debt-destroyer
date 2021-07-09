import { DebtType } from "../types/debt";

export const MockDebts: DebtType[] = [
  {
    title: "Visa",
    balance: 12130.54,
    interestRate: 0.2399,
    minimumPayment: 315,
  },
];

export const NewDebt: DebtType = {
  title: "",
  balance: 0,
  interestRate: 0,
  minimumPayment: 0,
};
