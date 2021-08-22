import React, { Component } from 'react'

export default class SignInPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address: '',
            submitError: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        if (!this.state.address) {
            this.setState({ submitError: true })
        } else {
            this.props.getData(this.state.address)
        }
    }

    render() {
        return (
            <div className="container text-center mt-5">
                <h1>JOBCOIN</h1>
                <div className="mt-5 p-4 border-black rounded sign-in">
                    <p>Welcome! Please sign in with your JobCoin address</p>
                    <hr></hr>
                    <form onSubmit={ this.handleSubmit } className="mt-4">
                        <div className="row g-3 align-items-center justify-content-center">
                            <div className="col-auto">
                                <label htmlFor="address" className="form-label visually-hidden">Address</label>
                            </div>
                            <div className="col-auto">
                                <input onChange={ this.handleChange } type="text" className="form-control" id="address" placeholder="Jilly" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>
                            { this.state.submitError && 
                                <div id="submitError" className="form-text pt-2">Must enter an address to sign in.</div> }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
