import React, { Component } from 'react'
import SignOutBtn from './SignOutBtn'

export default class AppBar extends Component {
    render() {
        return (
            <div>
                <SignOutBtn handleLogout={ this.props.handleLogout } />
            </div>
        )
    }
}
