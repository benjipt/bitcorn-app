import { render, cleanup, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ChartCard from '../ChartCard'

describe('ChartCard', () => {
    beforeEach(() => {
        render(<ChartCard/>)
    })

    afterEach(() => {
        cleanup()
    })

    test('should render ChartCard component', () => {
        screen.getByTestId('ChartCard-1')
    })

    test('matches snapshot', () => {
        const tree = renderer.create(<ChartCard/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})