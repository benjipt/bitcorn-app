export type Transaction = {
  amount: string; // float
  timestamp: string; // ISO8601 Date
  toAddress: string;
};

export interface Response {
  balance: string;
  transactions: Transaction[];
  error?: string;
}

export type BalancePlot = {
  amount: number;
  date: string;
};

export type ErrorMessageState = null | string;
