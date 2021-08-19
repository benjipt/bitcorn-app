import React, { Component } from 'react'
import SignOutBtn from './SignOutBtn'

export default class AppBar extends Component {
    render() {
        return (
            <div className="container-fluid pt-2 pb-2 d-flex flex-row justify-content-end app-bar app-bar-border">

                <SignOutBtn handleLogout={ this.props.handleLogout } />
            </div>
        )
    }
}
