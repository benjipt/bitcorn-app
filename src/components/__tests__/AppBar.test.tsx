// AppBar.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '@/store/store';
import AppBar from '@/components/AppBar';

describe('AppBar', () => {
  it('should render AppBar with AddressName and SignOutBtn', () => {
    // Renders Appbar and child components
    render(
      <Provider store={store}>
        <AppBar address='' />
      </Provider>
    );
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
    // Renders Appbar and child components
    render(
      <Provider store={store}>
        <AppBar address={address} />
      </Provider>
    );
    // Grabs components from render
    const AddressNameComponent = screen.getByTestId('AddressName-1');
    // Tests for expected prop behavior
    expect(AddressNameComponent).toHaveTextContent('Jilly');
  });

  it('matches snapshot', () => {
    let tree: ReactTestRenderer | undefined;
    act(() => {
      tree = renderer.create(
        <Provider store={store}>
          <AppBar address='' />
        </Provider>
      );
    });
    expect(tree!.toJSON()).toMatchSnapshot();
  });
});
