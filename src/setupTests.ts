import '@testing-library/jest-dom/extend-expect';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

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
  // <~~ Workaround for ResizeObserver error
  cleanup();
});
