import { render, cleanup, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ChartCard from '../ChartCard'

describe('ChartCard', () => {
    afterEach(cleanup)

    test('should render ChartCard component', () => {
        // Render ChartCard component
        render(<ChartCard/>)
        // Grabs ChartCard component from render
        const chartCardComponent = screen.getByTestId('ChartCard-1')
        // Tests for expected component
        expect(chartCardComponent).toBeInTheDocument()
    })

    test('matches snapshot', () => {
        // Render component tree
        const tree = renderer.create(<ChartCard/>).toJSON()
        // Tests for matching snapshot
        expect(tree).toMatchSnapshot()
    })
})