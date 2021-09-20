import React, { Component } from 'react'
import { format } from 'date-fns'
import SignInPage from './components/SignInPage'
import JobCoinUI from './components/JobCoinUI'

const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      loggedInAddress: '',
      balance: '',
      runningBalance: []
    }

    this.getData = this.getData.bind(this)
    this.setRunningBalance = this.setRunningBalance.bind(this)
    this.generatePlot = this.generatePlot.bind(this)
    this.updateBalanceArr = this.updateBalanceArr.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  getData(address) {
    fetch(baseURL + 'addresses/' + address)
      .then(data => { return data.json()}, err => console.log(err))
      .then(parsedData => {
        this.setState({ 
        isLoggedIn: true,
        loggedInAddress: address,
        balance: parsedData.balance,
        transactions: parsedData.transactions })
        this.setRunningBalance(this.state.transactions)
      }, err => console.log(err))
  }

  setRunningBalance(transactions) {
    let currentBalance = 0
    let balanceArr = []
    for (let transaction of transactions) {
      if (transaction.toAddress === this.state.loggedInAddress) {
        currentBalance += Number(transaction.amount)
      } else {
        currentBalance -= Number(transaction.amount)
      }
      const plot = this.generatePlot(transaction, currentBalance)
      this.updateBalanceArr(plot, balanceArr)
    }
    this.setState({ runningBalance: balanceArr })
  }

  generatePlot(transaction, currentBalance) {
    const formattedDate = format(new Date(transaction.timestamp), 'yyyy-MM-dd')
    return { amount: currentBalance, date: formattedDate }
  }

  updateBalanceArr(plot, balanceArr) {
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

  handleLogout() {
    this.setState({
      isLoggedIn: false,
      loggedInAddress: '',
      balance: '',
      transactions: []
    })
  }

  render() {
    return (
      <div>
        { !this.state.isLoggedIn && 
          <SignInPage
            getData={ this.getData } /> }

        { this.state.isLoggedIn &&
          <JobCoinUI 
            handleLogout={ this.handleLogout }
            address={ this.state.loggedInAddress }
            balance={ this.state.balance }
            getData={ this.getData }
            data={ this.state.runningBalance } /> }
      </div>
    )
  }
}

