import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import SendCard from '../SendCard'

afterEach(() => {
    cleanup()
})

describe('SendCard', () => {

    test('should render SendCard component', () => {
        render(<SendCard/>)
        const SendCardComponent = screen.getByTestId('SendCard-1')
        expect(SendCardComponent).toBeInTheDocument()
    })

    // test('handleChange updates inputValue state', () => {
    //     render(<SendCard/>)
    //     const SendCardComponent = screen.getByTestId('SendCard-1')

    //     // Accessing Input fields and staging input values
    //     const toAddressInput = screen.getByTestId('SendCard-input-1')
    //     const amountInput = screen.getByTestId('SendCard-input-2')
    //     const toAddressValue = { target: { value: 'Bob' } }
    //     const amountValue = { target: { value: '24.5' } }

    //     // Setting input values via onChange
    //     fireEvent.change(toAddressInput, toAddressValue)
    //     fireEvent.change(amountInput, amountValue)

    //     expect(SendCardComponent.inputValue).toBe({})
    // })

    test('handleChange updates controlled input values', () => {
        // Mounting and accessing the SendCard component
        render(<SendCard/>)

        // Accessing Input fields and staging input values
        const toAddressInput = screen.getByTestId('SendCard-input-1')
        const amountInput = screen.getByTestId('SendCard-input-2')
        const toAddressValue = { target: { value: 'Bob' } }
        const amountValue = { target: { value: '24.5' } }

        // Setting and testing input values
        fireEvent.change(toAddressInput, toAddressValue)
        fireEvent.change(amountInput, amountValue)
        expect(toAddressInput.value).toBe('Bob')
        expect(amountInput.value).toBe('24.5')
    })

    // test('handleSubmit is called when completed form is submitted', () => {
    //     // Mounting and accessing the SendCard component
    //     render(<SendCard/>)

    //     // Accessing input fields and staging values
    //     const toAddressInput = screen.getByTestId('SendCard-input-1')
    //     const amountInput = screen.getByTestId('SendCard-input-2')
    //     const toAddressValue = { target: { value: 'Bob' } }
    //     const amountValue = { target: { value: '24.5' } }

    //     // Setting and testing input values via OnChange
    //     fireEvent.change(toAddressInput, toAddressValue)
    //     fireEvent.change(amountInput, amountValue)

    //     // <~~~ Finish this
    // })
})