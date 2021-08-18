import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="container text-center mt-5">
        <h1>JOBCOIN</h1>
        <div className="mt-5">
          <h5>Welcome! Please sign in with your JOBCOIN address.</h5>
          <form className="mt-4">
            <div className="row g-3 align-items-center justify-content-center">
              <div className="col-auto">
                <label htmlFor="address" className="form-label">Address</label>
              </div>
              <div className="col-auto">
                <input type="text" className="form-control" id="address" placeholder="Jilly" />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

