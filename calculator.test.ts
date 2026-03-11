/**
 * Unit tests for calculator functions.
 * Loads the compiled calculator.js so window.sum/subtract/multiply/divide are available in the browser environment.
 */
declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches functions to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./calculator.js");
});

describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  it("adds negative numbers and positive numbers", () => {
    expect(window.sum(-1, 1)).toBe(0);
  });

  it("returns 0 when both are 0", () => {
    expect(window.sum(0, 0)).toBe(0);
  });
});

describe("subtract", () => {
  it("subtracts two numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("works with negative results", () => {
    expect(window.subtract(3, 5)).toBe(-2);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    expect(window.multiply(3, 4)).toBe(12);
  });

  it("returns 0 if one is 0", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });
});

describe("divide", () => {
  it("divides two numbers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("handles non-integer quotient", () => {
    expect(window.divide(7, 2)).toBe(3.5);
  });

  it("throws error when dividing by zero", () => {
    expect(() => window.divide(1, 0)).toThrow("Division by zero");
  });
});

export {};
