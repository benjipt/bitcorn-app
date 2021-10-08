import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import AppBar from '../AppBar'

afterEach(() => {
    cleanup()
})

describe('AppBar', () => {

    test('should render AppBar with AddressName and SignOutBtn', () => {
        const address = 'Jilly'
        render(<AppBar address={ address } />)
        const AppBarComponent = screen.getByTestId('AppBar-1')
        const AddressNameComponent = screen.getByTestId('AddressName-1')
        const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1')
        expect(AppBarComponent).toBeInTheDocument()
        expect(AddressNameComponent).toBeInTheDocument()
        expect(AddressNameComponent).toHaveTextContent('Jilly')
        expect(SignOutBtnComponent).toBeInTheDocument()
    })

    test('matches snapshot', () => {
        const tree = renderer.create(<AppBar />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})