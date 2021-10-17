import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import SignOutBtn from '../SignOutBtn'

afterEach(() => {
    cleanup()
})

describe('SignOutBtn', () => {
    
    test('should render SignOutButton component', () => {
        render(<SignOutBtn />)
        const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1')
        expect(SignOutBtnComponent).toBeInTheDocument()
    })

    test('calls handleLogout prop when called', () => {
        const handleLogout = jest.fn()
        // Renders component with handleLogout prop
        render(<SignOutBtn handleLogout={ handleLogout } />)
        const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1')
        // Simulates click event and expects handleLogout to have been called.
        userEvent.click(SignOutBtnComponent)
        expect(handleLogout).toHaveBeenCalled()
    })
    
    test('matches snapshot', () => {
        const tree = renderer.create(<SignOutBtn />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
