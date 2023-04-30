import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import AppBar from '../AppBar';

describe('AppBar', () => {
  it('should render AppBar with AddressName and SignOutBtn', () => {
    // Renders Appbar and child components
    render(<AppBar address='' handleLogout={() => {}} />);
    // Grabs components from render
    const AppBarComponent = screen.getByTestId('AppBar-1');
    const AddressNameComponent = screen.getByTestId('AddressName-1');
    const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1');
    // Tests for expected components and content
    expect(AppBarComponent).toBeInTheDocument();
    expect(AddressNameComponent).toBeInTheDocument();
    expect(SignOutBtnComponent).toBeInTheDocument();
  });

  it('passed props behave as expected', () => {
    // Mock props
    const address = 'Jilly';
    const handleLogout = vi.fn();
    // Renders Appbar and child components
    render(<AppBar address={address} handleLogout={handleLogout} />);
    // Grabs components from render
    const AddressNameComponent = screen.getByTestId('AddressName-1');
    const SignOutBtnComponent = screen.getByTestId('SignOutBtn-1');
    // Tests for expected prop behavior
    expect(AddressNameComponent).toHaveTextContent('Jilly');
    fireEvent.click(SignOutBtnComponent);
    expect(handleLogout).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    let tree: ReactTestRenderer | undefined;
    act(() => {
      tree = renderer.create(<AppBar address='' handleLogout={() => {}} />);
    });
    expect(tree!.toJSON()).toMatchSnapshot();
  });
});
