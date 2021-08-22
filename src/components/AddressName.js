import React, { Component } from 'react'

export default class AddressName extends Component {
    render() {
        return (
            <div className="mt-1 ps-4">
                <h4>{this.props.address}</h4>
            </div>
        )
    }
}
