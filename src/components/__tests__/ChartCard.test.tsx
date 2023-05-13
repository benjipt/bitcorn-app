import { beforeEach, describe, it, expect, vi } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import ChartCard from '@/components/ChartCard';

// Workaround for ResizeObserver error described here ~~>
// https://github.com/maslianok/react-resize-detector/issues/145
const { ResizeObserver } = window;
beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});
afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  vi.restoreAllMocks();
});
// <~~ Workaround for ResizeObserver error

describe('ChartCard', () => {
  afterEach(cleanup);

  it('should render ChartCard component', () => {
    // Render ChartCard component
    render(<ChartCard data={[]} />);
    // Grabs ChartCard component from render
    const chartCardComponent = screen.getByTestId('ChartCard-1');
    // Tests for expected component
    expect(chartCardComponent).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    let tree;
    act(() => {
      const { asFragment } = render(<ChartCard data={[]} />);
      tree = asFragment();
    });
    expect(tree).toMatchSnapshot();
  });
});
