import { useEffect, useCallback } from 'react';
import { format, subDays } from 'date-fns';
import { BalancePlot, Response, Transaction } from '../types';
import { BASE_URL } from './env';
import { useAppDispatch } from '../store/store';
import {
  setLoggedIn,
  setAddress,
  setBalance,
  setBalanceHistory,
  setError,
} from '../store/slices/userSlice';

export function useBitcornData() {
  const dispatch = useAppDispatch();
  // const [errorMessage, setErrorMessage] = useState<ErrorMessageState>(null);

  // Load persisted logged in address on component mount (if available)
  useEffect(() => {
    const persistedLoggedInAddress = sessionStorage.getItem('loggedInAddress');
    if (persistedLoggedInAddress && persistedLoggedInAddress !== 'null') {
      getData(persistedLoggedInAddress);
    }
  }, []);

  // Fetch address data from API and update state
  const getData = useCallback(async (address: string | null) => {
    if (address === null) return;
    try {
      const response = await fetch(BASE_URL + 'addresses/' + address);

      if (response.status === 404) {
        dispatch(setError('Address not found. Would you like to create one?'));
        return;
      } else if (!response.ok) {
        dispatch(
          setError(
            `error: ${response.status}: ${response.statusText} - ${response.url}`
          )
        );
        return;
      }

      const parsedData: Response = await response.json();

      if (!parsedData) {
        dispatch(setError('Failed to fetch data. Invalid response received.'));
        return;
      }

      if (parsedData?.error) {
        dispatch(setError(`Server error: ${parsedData.error}`));
        return;
      }

      const { balance, transactions } = parsedData;
      dispatch(setLoggedIn(true));
      dispatch(setAddress(address));
      dispatch(setBalance(balance));
      createBalanceHistory(transactions, address);
      sessionStorage.setItem('loggedInAddress', address);
    } catch (err: any) {
      dispatch(
        setError(`error: ${err.status}: ${err.statusText} - ${err.url}`)
      );
    }
  }, []);

  // Calculate running balance data for chart rendering
  const createBalanceHistory = (
    transactions: Transaction[],
    loggedInAddress: string
  ) => {
    let currentBalance = 0;
    const balanceArr: BalancePlot[] = [];
    const dateOfFirstTransaction = new Date(transactions[0].timestamp);
    // Ensure starting point of 0 on chart
    balanceArr.push({
      amount: currentBalance,
      date: format(subDays(dateOfFirstTransaction, 1), 'yyyy-MM-dd'),
    });
    for (let transaction of transactions) {
      if (transaction.toAddress === loggedInAddress.toLowerCase()) {
        currentBalance += Number(transaction.amount);
      } else {
        currentBalance -= Number(transaction.amount);
      }
      const plot = generatePlot(transaction, currentBalance);
      updateBalanceArr(plot, balanceArr);
    }
    dispatch(setBalanceHistory(balanceArr));
  };

  // Formats dates for chart rendering
  const generatePlot = useCallback(
    (transaction: Transaction, currentBalance: number) => {
      const formattedDate = format(
        new Date(transaction.timestamp),
        'yyyy-MM-dd'
      );
      return { amount: currentBalance, date: formattedDate };
    },
    []
  );

  // Ensures balance value from each day is the latest balance
  const updateBalanceArr = useCallback(
    (plot: BalancePlot, balanceArr: BalancePlot[]) => {
      const lastIndex = balanceArr.length - 1;
      if (lastIndex > -1) {
        if (plot.date === balanceArr[lastIndex].date) {
          balanceArr.splice(lastIndex, 1, plot);
        } else {
          balanceArr.push(plot);
        }
      } else {
        balanceArr.push(plot);
      }
    },
    []
  );

  // Handle logout functionality
  const handleLogout = useCallback(() => {
    dispatch(setLoggedIn(false));
    dispatch(setAddress(''));
    dispatch(setBalance(''));
    dispatch(setBalanceHistory([]));
    sessionStorage.clear();
  }, []);

  // Return necessary data and functions for the App component to use
  return {
    getData,
    handleLogout,
  };
}
