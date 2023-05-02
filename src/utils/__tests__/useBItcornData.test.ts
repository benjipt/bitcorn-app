import { beforeAll, afterEach, describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { useBitcornData } from '../useBitcornData';
import fetchMock from 'fetch-mock';
import { differenceInDays } from 'date-fns';

// Set up the fetch mock
beforeAll(() => {
  fetchMock.config.overwriteRoutes = true;
});

// Reset the fetch mock after each test
afterEach(() => {
  fetchMock.reset();
});

describe('useBitcornData', () => {
  it('should load persisted logged in address on mount', async () => {
    // Arrange
    sessionStorage.setItem('loggedInAddress', 'test-address');
    const mockResponse = {
      balance: '100',
      transactions: [
        {
          amount: '50',
          timestamp: '2023-04-01T12:00:00.000Z',
          toAddress: 'test-address',
        },
      ],
    };
    fetchMock.mock('*', {
      status: 200,
      body: JSON.stringify(mockResponse),
      headers: { 'Content-Type': 'application/json' },
    });

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useBitcornData());

    // Assert
    await waitForNextUpdate();
    expect(result.current.isLoggedIn).toBe(true);
    expect(result.current.loggedInAddress).toBe('test-address');
    expect(result.current.balance).toBe('100');
    expect(result.current.runningBalance[0].amount).toBe(0);
    expect(
      differenceInDays(
        new Date(result.current.runningBalance[1].date),
        new Date(result.current.runningBalance[0].date)
      )
    ).toBe(1);
  });
});
