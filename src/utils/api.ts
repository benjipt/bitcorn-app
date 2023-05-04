import { setLoggedIn } from '../store/slices/userSlice';
import { useAppDispatch } from '../store/store';
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
    body: JSON.stringify({ transaction: { fromAddress, toAddress, amount } }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(err => {
    console.error('Error submitting transaction:', err);
    throw new Error('Failed to submit transaction. Please try again later.');
  });
};

export const postAddress = async (address: string): Promise<Response> => {
  const dispatch = useAppDispatch();
  const response = await fetch(BASE_URL + 'addresses', {
    method: 'POST',
    body: JSON.stringify({ address }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(err => {
    console.error('Error creating new address:', err);
    throw new Error('Failed to create new address. Please try again later.');
  });
  if (response.ok) {
    dispatch(setLoggedIn(true));
  } else if (response.status === 409) {
    throw new Error('Address already exists.');
  } else {
    throw new Error('Failed to create new address. Please try again later.');
  }
  return response.json();
};
