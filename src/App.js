import React, { Component } from 'react'
import SignInPage from './components/SignInPage'
import AppBar from './components/AppBar'
import BalanceCard from './components/BalanceCard'
import SendCard from './components/SendCard'

const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      loggedInAddress: '',
      balance: '',
      transactions: [],
      runningBalance: []
    }

    this.getData = this.getData.bind(this)
    this.setRunningBalance = this.setRunningBalance.bind(this)
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
    for (let transaction of transactions) {
      if (transaction.toAddress === this.state.loggedInAddress) {
        currentBalance += Number(transaction.amount)
      }
    }
    console.log(currentBalance)
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
          <AppBar 
            handleLogout={ this.handleLogout }
            address={ this.state.loggedInAddress } /> }

        { this.state.isLoggedIn &&
          <BalanceCard 
            balance={ this.state.balance } /> }

        { this.state.isLoggedIn &&
          <SendCard 
            address={ this.state.loggedInAddress }
            getData={ this.getData } /> }
      </div>
    )
  }
}

