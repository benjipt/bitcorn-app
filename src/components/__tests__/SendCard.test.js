import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import SendCard from '../SendCard'


describe('SendCard', () => {
    afterEach(cleanup)

    test('should render SendCard component', () => {
        // Renders SendCard component
        render(<SendCard/>)
        // Grabs SendCard component from render
        const SendCardComponent = screen.getByTestId('SendCard-1')
        // Tests for expected component
        expect(SendCardComponent).toBeInTheDocument()
    })

    test('matches snapshot', () => {
        // Render component tree
        const tree = renderer.create(<SendCard/>).toJSON()
        // Tests for matching snapshot
        expect(tree).toMatchSnapshot()
    })
})