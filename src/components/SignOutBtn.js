import React from 'react'

export default function SignOutBtn({ handleLogout }) {
    return (
        <div>
            <button onClick={ handleLogout } className="btn btn-outline-dark" data-testid="SignOutBtn-1">Sign Out</button>
        </div>
    )
}
