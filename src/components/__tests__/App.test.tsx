import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../../App';

describe('App', () => {
  it('should render App', () => {
    // Renders App
    render(<App />);
    // Grabs App from render
    const AppComponent = screen.getByTestId('App-1');
    // Tests for expected App
    expect(AppComponent).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    // Render component tree
    const tree = renderer.create(<App />).toJSON();
    // Tests for matching snapshot
    expect(tree).toMatchSnapshot();
  });
});
