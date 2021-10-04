import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import AddressName from '../AddressName'

afterEach(() => {
    cleanup()
})

test('should render AddressName component with address prop', () => {
    const address = 'Jilly'
    render(<AddressName address={ address } />)
    const AddressNameComponent = screen.getByTestId('AddressName-1')
    expect(AddressNameComponent).toBeInTheDocument()
    expect(AddressNameComponent).toHaveTextContent('Jilly')
})

test('matches snapshot', () => {
    const address = 'Jilly'
    const tree = renderer.create(<AddressName address={ address } />).toJSON()
    expect(tree).toMatchSnapshot()
})