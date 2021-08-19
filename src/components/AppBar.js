import React, { Component } from 'react'
import SignOutBtn from './SignOutBtn'

export default class AppBar extends Component {
    render() {
        return (
            <div className="container-fluid pt-2 row align-items-center">
                <SignOutBtn handleLogout={ this.props.handleLogout } />
            </div>
        )
    }
}
