import { render, cleanup, screen } from '@testing-library/react';
import renderer, { ReactTestRendererJSON, act } from 'react-test-renderer';
import ChartCard from '../ChartCard';

// Workaround for ResizeObserver error described here ~~>
// https://github.com/maslianok/react-resize-detector/issues/145
const { ResizeObserver } = window;
beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});
afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});
// <~~ Workaround for ResizeObserver error

describe('ChartCard', () => {
  afterEach(cleanup);

  test('should render ChartCard component', () => {
    // Render ChartCard component
    render(<ChartCard data={[]} />);
    // Grabs ChartCard component from render
    const chartCardComponent = screen.getByTestId('ChartCard-1');
    // Tests for expected component
    expect(chartCardComponent).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    // Render component tree
    let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null;
    act(() => {
      tree = renderer.create(<ChartCard data={[]} />).toJSON();
    });
    // Tests for matching snapshot
    expect(tree!).toMatchSnapshot();
  });
});
