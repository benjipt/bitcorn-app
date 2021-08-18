import React, { Component } from 'react'

export default class SignInForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addressInput: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }

    render() {
        return (
            <div className="mt-5">
                <h5>Welcome! Please sign in with your JOBCOIN address.</h5>
                <form className="mt-4">
                    <div className="row g-3 align-items-center justify-content-center">
                    <div className="col-auto">
                        <label htmlFor="addressInput" className="form-label">Address</label>
                    </div>
                    <div className="col-auto">
                        <input onChange={ this.handleChange } type="text" className="form-control" id="addressInput" placeholder="Jilly" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
