import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SignOutBtn from '../SignOutBtn';

describe('SignOutBtn', () => {
  afterEach(cleanup);

  test('should render SignOutButton component', () => {
    // Renders SignOutBtn Component
    render(<SignOutBtn handleLogout={() => {}} />);
    // Grabs component from render
    const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1');
    // Tests for expected component
    expect(SignOutBtnComponent).toBeInTheDocument();
  });

  test('calls handleLogout prop when called', () => {
    // Mocks function passed as prop
    const handleLogout = jest.fn();
    // Renders component with handleLogout prop
    render(<SignOutBtn handleLogout={handleLogout} />);
    // Grabs component from render
    const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1');
    // Simulates click event
    fireEvent.click(SignOutBtnComponent);
    // Tests that mock function was called once
    expect(handleLogout).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', () => {
    // Render component tree
    const tree = renderer
      .create(<SignOutBtn handleLogout={() => {}} />)
      .toJSON();
    // Tests for matching snapshot
    expect(tree).toMatchSnapshot();
  });
});
