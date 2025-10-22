// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const createCanvasContext = () => ({
  clearRect: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  set fillStyle(_) {},
  set strokeStyle(_) {},
  set lineWidth(_) {}
});

Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: createCanvasContext,
  configurable: true
});

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = jest.fn();
} else {
  window.requestAnimationFrame = jest.fn();
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = jest.fn();
} else {
  window.cancelAnimationFrame = jest.fn();
}
