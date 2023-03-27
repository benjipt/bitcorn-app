import { useState, ChangeEvent, SyntheticEvent } from 'react'

const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/'

interface SendCardProps {
  address: string
  getData: (address: string) => void
}

export default function SendCard({ address, getData }: SendCardProps) {

    // STATE HOOKS
    const [ nsfError, setNsfError ] = useState(false)
    const [ inputValue, setInputValue ] = useState({
        toAddress: '',
        amount: ''
    })

    // Destructured properties of inputValue state hook
    const { toAddress, amount } = inputValue

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget
        setInputValue({ ...inputValue, [id]: value })
    }

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(baseURL + 'transactions', {
            method: 'POST',
            body: JSON.stringify({
                fromAddress: address,
                toAddress: toAddress,
                amount: amount
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 422) {
                setNsfError(true)
            } else {
                setInputValue({
                    toAddress: '',
                    amount: ''
                })
                getData(address)
            }
        })
    }

    return (
        <div className="container mt-5 p-4 border-black rounded card-custom" data-testid="SendCard-1">
            <div className="text-center">
                <h5>Send JobCoin</h5>
            </div>
            <hr></hr>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="toAddress" className="form-label">Destination Address</label>
                    <input onChange={ handleChange } type="text" className="form-control" id="toAddress" data-testid="input-1" value={ toAddress } />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount to Send</label>
                    <input onChange={ handleChange } type="text" className="form-control" id="amount" data-testid="input-2" value={ amount } />
                    { nsfError &&
                        <div id="nsfError" className="form-text" data-testid="error-1">You do not have enough funds to send this amount.</div> }
                </div>
                <button type="submit" className="btn btn-primary" data-testid="submit-1">Send</button>
            </form>
        </div>
    )
}