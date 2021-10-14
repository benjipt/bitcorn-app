import React from 'react'

export default function BalanceCard({ balance }) {
    return (
        <div className="container text-center mt-5 p-4 border-black rounded card-custom" data-testid="BalanceCard-1">
            <h5>JobCoin Balance</h5>
            <hr></hr>
            <p className="balance">{ balance }</p>
        </div>
    )
}
