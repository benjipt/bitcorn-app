import { render, screen, cleanup } from '@testing-library/react'
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