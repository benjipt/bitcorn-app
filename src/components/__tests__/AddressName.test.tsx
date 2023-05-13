import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddressName from '@/components/AddressName';

describe('AddressName', () => {
  it('should render component', () => {
    render(<AddressName address='' />);
    const AddressNameComponent = screen.getByTestId('AddressName-1');
    expect(AddressNameComponent).toBeInTheDocument();
  });

  it('passed prop should behave as expected', () => {
    const address = 'Jilly';
    render(<AddressName address={address} />);
    const AddressNameComponent = screen.getByTestId('AddressName-1');
    expect(AddressNameComponent).toHaveTextContent(address);
  });

  it('matches snapshot', () => {
    const address = 'Jilly';
    const tree = renderer.create(<AddressName address={address} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
