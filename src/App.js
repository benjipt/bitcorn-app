import React, { Component } from 'react'
import SignInPage from './components/SignInPage'

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
    this.getData = this.getData.bind(this)
  }

  handleLogin(address) {
    this.setState({
      isLoggedIn: true,
      loggedInAddress: address
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
      </div>
    )
  }
}

