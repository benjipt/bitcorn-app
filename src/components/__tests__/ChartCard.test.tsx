import { describe, it, expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import ChartCard from '@/components/ChartCard';

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
