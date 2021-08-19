import React, { Component } from 'react'

export default class AddressName extends Component {
    render() {
        return (
            <div className="mt-2 ps-4">
                <h5>{this.props.address}</h5>
            </div>
        )
    }
}
