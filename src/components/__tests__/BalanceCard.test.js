import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import BalanceCard from '../BalanceCard'

afterEach(() => {
    cleanup()
})

describe('BalanceCard', () => {

    test('should render BalanceCard component', () => {
        render(<BalanceCard/>)
        const BalanceCardComponent = screen.getByTestId('BalanceCard-1')
        expect(BalanceCardComponent).toBeInTheDocument()
    })

    test('passed props should behave as expected', () => {
        const balance = '150'

        render(<BalanceCard balance={ balance } />)
        const BalanceCardComponent = screen.getByTestId('BalanceCard-1')
        expect(BalanceCardComponent).toHaveTextContent(balance)
    })

    test('matches snapshot', () => {
        const balance = '150'

        const tree = renderer.create(<BalanceCard balance={ balance } />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})