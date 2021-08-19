import React, { Component } from 'react'
import SignInPage from './components/SignInPage'
import SignOutBtn from './components/SignOutBtn'

const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      loggedInAddress: '',
      balance: '',
      transactions: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.getData = this.getData.bind(this)
  }

  handleLogin(address) {
    this.setState({
      isLoggedIn: true,
      loggedInAddress: address
    })
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
      loggedInAddress: '',
      balance: '',
      transactions: ''
    })
  }

  getData(address) {
    fetch(baseURL + 'addresses/' + address)
      .then(data => { return data.json()}, err => console.log(err))
      .then(parsedData => this.setState({ 
        balance: parsedData.balance,
        transactions: parsedData.transactions }), err => console.log(err))
  }

  render() {
    return (
      <div>
        { !this.state.isLoggedIn && 
          <SignInPage
            handleLogin={ this.handleLogin }
            getData={ this.getData } /> }

        { this.state.isLoggedIn &&
          <SignOutBtn 
            handleLogout={ this.handleLogout } /> }
      </div>
    )
  }
}

