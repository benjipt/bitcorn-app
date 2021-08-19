import React, { Component } from 'react'

export default class SendCard extends Component {
    render() {
        return (
            <div className="container mt-5 p-4 border-black rounded card-custom">
                <div className="text-center">
                    <h5>Send JobCoin</h5>
                </div>
                <hr></hr>
                <form>
                    <div className="mb-3">
                        <label htmlFor="toAddress" className="form-label">Destination Address</label>
                        <input type="text" className="form-control" id="toAddress" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount to Send</label>
                        <input type="text" className="form-control" id="amount" />
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        )
    }
}
