import React, { useState } from 'react'
import { format } from 'date-fns'
import SignInPage from './components/SignInPage'
import JobCoinUI from './components/JobCoinUI'

const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/'

export default function App() {
  // STATE HOOKS
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ loggedInAddress, setLoggedInAddress ] = useState('')
  const [ balance, setBalance ] = useState('')
  const [ runningBalance, setRunningBalance ] = useState([])

  // RETRIEVES DATA FROM JOBCOIN UI
  const getData = address => {
    fetch(baseURL + 'addresses/' + address)
      .then(data => { return data.json()}, err => console.log(err))
      .then(parsedData => {
        const { balance, transactions } = parsedData
        setIsLoggedIn(true)
        setLoggedInAddress(address)
        setBalance(balance)
        const balanceData = shapeData(transactions)
        setRunningBalance(balanceData)
      }, err => console.log(err))
  }
  
  // SHAPES TRANSACTION DATA INTO BALANCE DATA FOR CHART ~~~~~>
  const shapeData = transactions => {
    let currentBalance = 0
    let balanceArr = []
    for (let transaction of transactions) {
      const { toAddress, amount, timestamp } = transaction
      if (toAddress === loggedInAddress) {
        currentBalance += Number(amount)
      } else {
        currentBalance -= Number(amount)
      }
      const plot = generatePlot(timestamp, currentBalance)
      updateBalanceArr(plot, balanceArr)
    }
    return balanceArr
  }

  const generatePlot = (timestamp, currentBalance) => {
    const formattedDate = format(new Date(timestamp), 'yyyy-MM-dd')
    return { amount: currentBalance, date: formattedDate }
  }

  const updateBalanceArr = (plot, balanceArr) => {
    const lastIndex = balanceArr.length - 1
    if (lastIndex > -1) {
      if (plot.date === balanceArr[lastIndex].date) {
        balanceArr.splice(lastIndex, 1, plot)
      } else {
        balanceArr.push(plot)
      }
    } else {
      balanceArr.push(plot)
    }
  }
  // <~~~~~ SHAPES TRANSACTION DATA INTO BALANCE DATA FOR CHART

  // RESETS STATE UPON LOGOUT
  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoggedInAddress('')
    setBalance('')
    setRunningBalance([])
  }

  return (
    <div>
      { !isLoggedIn && 
        <SignInPage
          getData={ getData } /> }

      { isLoggedIn &&
        <JobCoinUI 
          handleLogout={ handleLogout }
          address={ loggedInAddress }
          balance={ balance }
          getData={ getData }
          data={ runningBalance } /> }
    </div>
  )
}

