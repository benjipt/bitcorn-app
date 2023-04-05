import { BASE_URL } from './env';
export type PostTransactionType = (
  fromAddress: string,
  toAddress: string,
  amount: string
) => Promise<Response>;

export const postTransaction: PostTransactionType = (
  fromAddress,
  toAddress,
  amount
) => {
  return fetch(BASE_URL + 'transactions', {
    method: 'POST',
    body: JSON.stringify({ fromAddress, toAddress, amount }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
