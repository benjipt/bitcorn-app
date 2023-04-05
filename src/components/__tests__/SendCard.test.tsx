import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import SendCard from '../SendCard';

const mockPostTransaction = jest.fn().mockResolvedValue({ status: 200 });

describe('SendCard', () => {
  afterEach(cleanup);

  test('should render SendCard component', () => {
    render(
      <SendCard
        address=''
        getData={() => {}}
        postTransaction={mockPostTransaction}
      />
    );
    const SendCardComponent = screen.getByTestId('SendCard-1');
    expect(SendCardComponent).toBeInTheDocument();
  });

  test('should update input fields when typing', () => {
    render(
      <SendCard
        address=''
        getData={() => {}}
        postTransaction={mockPostTransaction}
      />
    );
    const toAddressInput = screen.getByTestId('input-1');
    const amountInput = screen.getByTestId('input-2');

    fireEvent.change(toAddressInput, { target: { value: 'testAddress' } });
    fireEvent.change(amountInput, { target: { value: '10' } });

    expect(toAddressInput).toHaveValue('testAddress');
    expect(amountInput).toHaveValue('10');
  });

  test('should display error message when not enough funds', async () => {
    const mockGetData = jest.fn();
    const mockPostTransactionError = jest
      .fn()
      .mockResolvedValue({ status: 422 });

    render(
      <SendCard
        address='testAddress'
        getData={mockGetData}
        postTransaction={mockPostTransactionError}
      />
    );

    const toAddressInput = screen.getByTestId('input-1');
    const amountInput = screen.getByTestId('input-2');
    const submitButton = screen.getByTestId('submit-1');

    fireEvent.change(toAddressInput, {
      target: { value: 'destinationAddress' },
    });
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(submitButton);

    // Wait for the error message to be displayed
    const errorMessage = await screen.findByTestId('error-1');
    expect(errorMessage).toBeInTheDocument();
  });
});
