import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import SignOutBtn from '../SignOutBtn'


describe('SignOutBtn', () => {
    afterEach(cleanup)
    
    test('should render SignOutButton component', () => {
        // Renders SignOutBtn Component
        render(<SignOutBtn />)
        // Grabs component from render
        const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1')
        // Tests for expected component
        expect(SignOutBtnComponent).toBeInTheDocument()
    })

    test('calls handleLogout prop when called', () => {
        // Mocks function passed as prop
        const handleLogout = jest.fn()
        // Renders component with handleLogout prop
        render(<SignOutBtn handleLogout={ handleLogout } />)
        // Grabs component from render
        const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1')
        // Simulates click event
        userEvent.click(SignOutBtnComponent)
        // Tests that mock function was called once
        expect(handleLogout).toHaveBeenCalledTimes(1)
    })
    
    test('matches snapshot', () => {
        // Render component tree
        const tree = renderer.create(<SignOutBtn />).toJSON()
        // Tests for matching snapshot
        expect(tree).toMatchSnapshot()
    })
})
