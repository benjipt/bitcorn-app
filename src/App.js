import React, { Component } from 'react'
import SignInForm from './components/SignInForm'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      loggedInAddress: ''
    }
  }

  render() {
    return (
      <div className="container text-center mt-5">
        <h1>JOBCOIN</h1>
        <SignInForm />
      </div>
    )
  }
}

