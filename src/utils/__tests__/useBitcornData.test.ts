import { renderHook } from '@testing-library/react-hooks';
import { useBitcornData } from '../useBitcornData';
import fetchMock from 'jest-fetch-mock';

// Set up the fetch mock
beforeAll(() => {
  fetchMock.enableMocks();
});

// Reset the fetch mock after each test
afterEach(() => {
  fetchMock.resetMocks();
});

describe('useBitcornData', () => {
  test('should load persisted logged in address on mount', async () => {
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
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useBitcornData());

    // Assert
    await waitForNextUpdate();
    expect(result.current.isLoggedIn).toBe(true);
    expect(result.current.loggedInAddress).toBe('test-address');
    expect(result.current.balance).toBe('100');
  });
});
