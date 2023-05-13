import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import App from '@/App';

describe('App', () => {
  it('should render App', () => {
    // Renders App wrapped with the provider
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // Grabs App from render
    const AppComponent = screen.getByTestId('App-1');
    // Tests for expected App
    expect(AppComponent).toBeInTheDocument();
  });
});
