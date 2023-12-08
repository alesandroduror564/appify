/*
Filename: ComplexCalculator.js
Description: This code demonstrates a complex calculator with advanced mathematical operations and user-friendly features.
*/

// Calculator class
class Calculator {
  constructor() {
    this.result = 0;
  }

  // Addition method
  add(...numbers) {
    this.result = numbers.reduce((sum, num) => sum + num, this.result);
    return this;
  }

  // Subtraction method
  subtract(...numbers) {
    this.result = numbers.reduce((diff, num) => diff - num, this.result);
    return this;
  }

  // Multiplication method
  multiply(...numbers) {
    this.result = numbers.reduce((product, num) => product * num, this.result);
    return this;
  }

  // Division method
  divide(...numbers) {
    if (numbers.includes(0)) {
      console.log('Error: Division by zero not allowed.');
      return this;
    }
    this.result = numbers.reduce((quotient, num) => quotient / num, this.result);
    return this;
  }

  // Exponential calculation method
  power(exponent) {
    this.result **= exponent;
    return this;
  }

  // Factorial calculation method
  factorial() {
    if (this.result < 0 || !Number.isInteger(this.result)) {
      console.log('Error: Factorial is defined only for non-negative whole numbers.');
      return this;
    }
    let result = 1;
    for (let i = 2; i <= this.result; i++) {
      result *= i;
    }
    this.result = result;
    return this;
  }

  // Square root calculation method
  squareRoot() {
    if (this.result < 0) {
      console.log('Error: Square root is undefined for negative numbers.');
      return this;
    }
    this.result = Math.sqrt(this.result);
    return this;
  }

  // Clear result method
  clear() {
    this.result = 0;
    return this;
  }

  // Get result method
  getResult() {
    return this.result;
  }
}

// Usage example
const calc = new Calculator();

calc.add(5, 10, 15).multiply(2).subtract(10).power(3).factorial().divide(2).squareRoot();

console.log('Result:', calc.getResult());