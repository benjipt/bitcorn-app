import { postTransaction } from '../api';
import fetchMock from 'fetch-mock';

const baseURL = 'https://jobcoin.gemini.com/greyhound-abruptly/api/';

describe('postTransaction', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('should call the API with the correct parameters and return a response', async () => {
    // Mock the fetch function with fetchMock
    fetchMock.post(
      `${baseURL}transactions`,
      { status: 200 },
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: {
          fromAddress: 'testFrom',
          toAddress: 'testTo',
          amount: '10',
        },
      }
    );

    const response = await postTransaction('testFrom', 'testTo', '10');

    expect(fetchMock.called()).toBe(true);
    expect(fetchMock.lastUrl()).toBe(`${baseURL}transactions`);
    expect(fetchMock.lastOptions()).toEqual({
      method: 'POST',
      body: JSON.stringify({
        fromAddress: 'testFrom',
        toAddress: 'testTo',
        amount: '10',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(response.status).toBe(200);
  });
});
