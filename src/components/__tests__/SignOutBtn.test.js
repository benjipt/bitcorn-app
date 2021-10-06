import { render, screen, cleanup } from '@testing-library/react'
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
    
    test('matches snapshot', () => {
        const tree = renderer.create(<SignOutBtn />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
