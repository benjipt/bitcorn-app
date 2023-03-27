export type Transaction = {
  amount: string; // float
  timestamp: string; // ISO8601 Date
  toAddress: string;
}

export interface Response {
  balance: string;
  transactions: Transaction[];
}
