import React from 'react'
import AddressName from './AddressName'
import SignOutBtn from './SignOutBtn'

export default function AppBar({ address, handleLogout }) {
    return (
        <div className="container-fluid pt-2 pb-2 d-flex flex-row justify-content-between app-bar app-bar-border">
            <AddressName address={ address } />
            <SignOutBtn handleLogout={ handleLogout } />
        </div>
    )
}
