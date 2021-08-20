import React, { Component } from 'react'

const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/'

export default class SendCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toAddress: '',
            amount: '',
            nsfError: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(baseURL + 'transactions', {
            method: 'POST',
            body: JSON.stringify({
                fromAddress: this.props.address,
                toAddress: this.state.toAddress,
                amount: this.state.amount
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 422) {
                this.setState({ nsfError: true })
            } else {
                this.setState({
                    toAddress: '',
                    amount: '',
                    nsfError: false
                })
                this.props.getData(this.props.address)
            }
        })
    }

    render() {
        return (
            <div className="container mt-5 p-4 border-black rounded card-custom">
                <div className="text-center">
                    <h5>Send JobCoin</h5>
                </div>
                <hr></hr>
                <form onSubmit={ this.handleSubmit }>
                    <div className="mb-3">
                        <label htmlFor="toAddress" className="form-label">Destination Address</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="toAddress" value={this.state.toAddress} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount to Send</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="amount" value={this.state.amount} />
                        { this.state.nsfError &&
                            <div id="nsfError" className="form-text">You do not have enough funds to send this amount.</div> }
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        )
    }
}
