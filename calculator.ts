/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Returns the difference of two numbers.
 */
function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Returns the product of two numbers.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Returns the quotient of two numbers. Throws on division by zero.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { sum: typeof sum; subtract: typeof subtract; multiply: typeof multiply; divide: typeof divide }).sum = sum;
(window as unknown as { sum: typeof sum; subtract: typeof subtract; multiply: typeof multiply; divide: typeof divide }).subtract = subtract;
(window as unknown as { sum: typeof sum; subtract: typeof subtract; multiply: typeof multiply; divide: typeof divide }).multiply = multiply;
(window as unknown as { sum: typeof sum; subtract: typeof subtract; multiply: typeof multiply; divide: typeof divide }).divide = divide;
