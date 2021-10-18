import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import AddressName from '../AddressName'



describe('AddressName', () => { 
    afterEach(cleanup)

    test('should render component', () => {
        render(<AddressName/>)
        const AddressNameComponent = screen.getByTestId('AddressName-1')
        expect(AddressNameComponent).toBeInTheDocument()
    })

    test('passed prop should behave as expected', () => {
        const address = 'Jilly'
        render(<AddressName address={ address } />)
        const AddressNameComponent = screen.getByTestId('AddressName-1')
        expect(AddressNameComponent).toHaveTextContent(address)
    })
    
    test('matches snapshot', () => {
        const address = 'Jilly'
        const tree = renderer.create(<AddressName address={ address } />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})