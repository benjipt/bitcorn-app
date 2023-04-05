import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { BalancePlot, Response, Transaction } from '../types';

export function useJobCoinData() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInAddress, setLoggedInAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [runningBalance, setRunningBalance] = useState<BalancePlot[]>([]);

  // Load persisted logged in address on component mount (if available)
  useEffect(() => {
    const persistedLoggedInAddress = sessionStorage.getItem('loggedInAddress');
    if (persistedLoggedInAddress && persistedLoggedInAddress !== 'null') {
      getData(persistedLoggedInAddress);
    }
  }, []);

  // Fetch address data from API and update state
  const getData = useCallback((address: string | null) => {
    if (address === null) return;
    fetch(`{$BASE_URL}/addresses/${address}`)
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        (parsedData: Response) => {
          const { balance, transactions } = parsedData;
          setIsLoggedIn(true);
          setLoggedInAddress(address);
          setBalance(balance);
          createRunningBalance(transactions, address);
          // DUPLICATES ADDRESS TO LOCAL STORAGE FOR PERSISTENT STATE UPON REFRESH
          sessionStorage.setItem('loggedInAddress', address);
        },
        err => console.log(err)
      );
  }, []);

  // Calculate running balance data for chart rendering
  const createRunningBalance = (
    transactions: Transaction[],
    loggedInAddress: string
  ) => {
    let currentBalance = 0;
    let balanceArr: BalancePlot[] = [];
    for (let transaction of transactions) {
      if (transaction.toAddress === loggedInAddress) {
        currentBalance += Number(transaction.amount);
      } else {
        currentBalance -= Number(transaction.amount);
      }
      const plot = generatePlot(transaction, currentBalance);
      updateBalanceArr(plot, balanceArr);
    }
    setRunningBalance(balanceArr);
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
    setIsLoggedIn(false);
    setLoggedInAddress('');
    setBalance('');
    setRunningBalance([]);
    sessionStorage.clear();
  }, []);

  // Return necessary data and functions for the App component to use
  return {
    isLoggedIn,
    loggedInAddress,
    balance,
    runningBalance,
    getData,
    handleLogout,
  };
}
