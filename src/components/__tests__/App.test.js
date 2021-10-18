import { render, cleanup, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from '../../App'

describe('App', () => {
    beforeEach(() => {
        render(<App/>)
    })

    afterEach(cleanup)

    test('should render App', () => {
        screen.getByTestId('App-1')
    })

    test('matches snapshot', () => {
        const tree = renderer.create(<App/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})