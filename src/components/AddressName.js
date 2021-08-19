import React, { Component } from 'react'

export default class AddressName extends Component {
    render() {
        return (
            <div className="ps-4">
                <p className="address">{this.props.address}</p>
            </div>
        )
    }
}
