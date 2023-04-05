export type PostTransactionType = (
  fromAddress: string,
  toAddress: string,
  amount: string
) => Promise<Response>;

const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/';

export const postTransaction: PostTransactionType = (
  fromAddress,
  toAddress,
  amount
) => {
  return fetch(baseURL + 'transactions', {
    method: 'POST',
    body: JSON.stringify({ fromAddress, toAddress, amount }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
