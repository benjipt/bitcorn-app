export type Transaction = {
  amount: string; // float
  timestamp: string; // ISO8601 Date
  toAddress: string;
};

/* TODO: Rename this to something else or get rid of it.
 * Conflicts with built-in Response type. */
export interface AddressData {
  balance: string;
  transactions: Transaction[];
  error?: ErrorResponse;
}

export interface ErrorResponse {
  error: string;
  status: number;
}

export type BalancePlot = {
  amount: number;
  date: string;
};
