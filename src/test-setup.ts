/** Polyfills mínimos para jsdom que Reka UI (Select/Popper) necesita en los tests. */
class ResizeObserverStub {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}
globalThis.ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver

for (const method of ['hasPointerCapture', 'setPointerCapture', 'releasePointerCapture', 'scrollIntoView'] as const) {
  if (!(method in Element.prototype)) {
    Object.defineProperty(Element.prototype, method, {
      value: method === 'hasPointerCapture' ? () => false : () => {},
      writable: true,
      configurable: true
    })
  }
}
