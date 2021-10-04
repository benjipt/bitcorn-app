import React from 'react'

export default function AddressName({ address }) {
    return (
        <div className="mt-1 ps-4" data-testid="AddressName-1">
            <h4>{ address }</h4>
        </div>
    )
}
