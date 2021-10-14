import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import AppBar from '../AppBar'

afterEach(() => {
    cleanup()
})

describe('AppBar', () => {

    test('should render AppBar with AddressName and SignOutBtn', () => {
        // Renders Appbar and child components
        render(<AppBar />)
        // Grabs components from rendered tree
        const AppBarComponent = screen.getByTestId('AppBar-1')
        const AddressNameComponent = screen.getByTestId('AddressName-1')
        const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1')
        // Tests for expected components and content
        expect(AppBarComponent).toBeInTheDocument()
        expect(AddressNameComponent).toBeInTheDocument()
        expect(SignOutBtnComponent).toBeInTheDocument()
    })

    test('passed props behave as expected', () => {
        // Mock props
        const address = 'Jilly'
        const handleLogout = jest.fn()
        // Renders Appbar and child components
        render(<AppBar address={ address } handleLogout={ handleLogout } />)
        // Grabs components from rendered tree
        const AddressNameComponent = screen.getByTestId('AddressName-1')
        const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1')
        // Tests for expected prop behavior
        expect(AddressNameComponent).toHaveTextContent('Jilly')
        fireEvent.click(SignOutBtnComponent)
        expect(handleLogout).toHaveBeenCalled()
    })

    test('matches snapshot', () => {
        const tree = renderer.create(<AppBar />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})