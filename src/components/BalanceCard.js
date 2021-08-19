import React, { Component } from 'react'

export default class BalanceCard extends Component {
    render() {
        return (
            <div className="container text-center mt-5 p-4 border-black rounded card-custom">
                <h5>Jobcoin Balance</h5>
                <hr></hr>
                <p>{this.props.balance}</p>
            </div>
        )
    }
}
