import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import SendCard from '../SendCard'


describe('SendCard', () => {

    beforeEach(() => {
        render(<SendCard/>)
    })
    
    afterEach(() => {
        cleanup()
    })

    test('should render SendCard component', () => {
        screen.getByTestId('SendCard-1')
    })

    describe('Form inputs', () => {
        
        test('should render input fields', () => {
            screen.getByTestId('SendCard-input-1')
            screen.getByTestId('SendCard-input-2')
        })
    
        test('handleChange updates controlled input values', () => {
            // Accessing Input fields
            const toAddressInput = screen.getByTestId('SendCard-input-1')
            const amountInput = screen.getByTestId('SendCard-input-2')
            // Typing input values
            userEvent.type(toAddressInput, 'Bob')
            userEvent.type(amountInput, '24.5')
            // Tests for expected input values
            expect(toAddressInput).toHaveValue('Bob')
            expect(amountInput).toHaveValue('24.5')
        })
    })

    describe('Form submit', () => {

        test('should render submit button', () => {
            screen.getByText('Send')
        })

    })

    test('matches snapshot', () => {
        const tree = renderer.create(<SendCard/>).toJSON()
        expect(tree).toMatchSnapshot()
    })

})