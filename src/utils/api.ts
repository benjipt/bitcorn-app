const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/';

export function postTransaction(
  fromAddress: string,
  toAddress: string,
  amount: string
): Promise<Response> {
  return fetch(baseURL + 'transactions', {
    method: 'POST',
    body: JSON.stringify({ fromAddress, toAddress, amount }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
