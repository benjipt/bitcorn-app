import React, { Component } from 'react'

export default class SignOutBtn extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <button onClick={ this.props.handleLogout } className="btn btn-outline-dark">Sign Out</button>
            </div>
        )
    }
}
