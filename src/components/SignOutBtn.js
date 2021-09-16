import React from 'react'

export default function SignOutBtn({ handleLogout }) {
    return (
        <div>
            <button onClick={ handleLogout } className="btn btn-outline-dark">Sign Out</button>
        </div>
    )
}
