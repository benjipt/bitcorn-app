// @/components/__tests__/SendCard.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SendCard from '@/components/SendCard';

const mockPostTransaction = vi.fn().mockResolvedValue({ status: 200 });

describe('SendCard', () => {
  it('should render SendCard component', () => {
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

  it('should update input fields when typing', () => {
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

  it('should display error message when not enough funds', async () => {
    const mockGetData = vi.fn();
    const mockPostTransactionError = vi.fn().mockResolvedValue({ status: 422 });

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

  it('should not allow more than six digits after the decimal in amount', () => {
    render(
      <SendCard
        address=''
        getData={() => {}}
        postTransaction={mockPostTransaction}
      />
    );
    const amountInput = screen.getByTestId('input-2');

    fireEvent.change(amountInput, { target: { value: '123456.1234567' } });
    expect(amountInput).not.toHaveValue('123456.1234567');

    fireEvent.change(amountInput, { target: { value: '123456.123456' } });
    expect(amountInput).toHaveValue('123456.123456');
  });

  it('should only accept valid characters in amount', () => {
    render(
      <SendCard
        address=''
        getData={() => {}}
        postTransaction={mockPostTransaction}
      />
    );
    const amountInput = screen.getByTestId('input-2');

    fireEvent.change(amountInput, { target: { value: 'abc' } });
    expect(amountInput).not.toHaveValue('abc');

    fireEvent.change(amountInput, { target: { value: '123456' } });
    expect(amountInput).toHaveValue('123456');

    fireEvent.change(amountInput, { target: { value: '123.456' } });
    expect(amountInput).toHaveValue('123.456');

    fireEvent.change(amountInput, { target: { value: '.' } });
    expect(amountInput).toHaveValue('.');
  });
});
