import { setError } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/store/store';
import { AddressData } from '@/types';
import { BASE_URL } from '@/utils/env';
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

export const postAddress = async (
  address: string,
  dispatch: ReturnType<typeof useAppDispatch>
): Promise<AddressData> => {
  let response: Response | undefined;

  try {
    response = await fetch(BASE_URL + 'addresses', {
      method: 'POST',
      body: JSON.stringify({ address }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Error creating new address:', err);
    dispatch(setError('Failed to create new address. Please try again later.'));
  }

  if (!response) {
    dispatch(setError('No response from the server. Please try again later.'));
  }

  if (response?.status === 409) {
    dispatch(setError('Address already exists.'));
  } else if (!response?.ok) {
    dispatch(setError('Failed to create new address. Please try again later.'));
  }

  return response?.json();
};
