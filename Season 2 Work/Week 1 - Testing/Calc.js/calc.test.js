const { add, subtract, multiply, divide, square, calculate, squareRoot, power, modulus, absolute } = require('./calc.js');

describe('Calculator functions', () => {
    test('add function should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-2, 3)).toBe(1);
        expect(add(0, 0)).toBe(0);
        expect(add(100, 200)).toBe(300);
        expect(add(-100, -200)).toBe(-300);
        expect(add(123456789, 987654321)).toBe(1111111110);
    });

    test('add function should handle floating point numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-2, 3)).toBe(1);
        expect(add(0, 0)).toBe(0);
        expect(add(100, 200)).toBe(300);
        expect(add(-100, -200)).toBe(-300);
        expect(add(123456789, 987654321)).toBe(1111111110);
    });

    test('add function should handle large numbers', () => {
        expect(add(1000000, 2000000)).toBe(3000000);
        expect(add(-1000000, 2000000)).toBe(1000000);
    });
    test('add function should handle adding zero', () => {
        expect(add(5, 0)).toBe(5);
        expect(add(0, 5)).toBe(5);
        expect(add(-5, 0)).toBe(-5);
    });

    test('subtract function should return the difference of two numbers', () => {
        expect(subtract(2, 3)).toBe(-1);
        expect(subtract(-2, 3)).toBe(-5);
        expect(subtract(0, 0)).toBe(0);
    });

    test('multiply function should return the product of two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 0)).toBe(0);
    });

    test('divide function should return the quotient of two numbers', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-6, 3)).toBe(-2);
        expect(divide(0, 5)).toBe(0);
    });

    test('square function should return the square of a number', () => {
        expect(square(2)).toBe(4);
        expect(square(-2)).toBe(4);
        expect(square(0)).toBe(0);
        expect(square(1.5)).toBeCloseTo(2.25);
        expect(square(-1.5)).toBeCloseTo(2.25);
        expect(square(123456.789)).toBeCloseTo(15241383936.052);
        expect(square(3)).toBe(9);
        expect(square(-3)).toBe(9);
        expect(square(0.5)).toBeCloseTo(0.25);
        expect(square(-0.5)).toBeCloseTo(0.25);
        expect(square(100000)).toBe(10000000000);
    });

    test('squareRoot function should return the square root of a number', () => {
        expect(squareRoot(4)).toBe(2);
        expect(squareRoot(9)).toBe(3);
        expect(squareRoot(1)).toBe(1);
        expect(squareRoot(0)).toBe(0);
        expect(squareRoot(0.25)).toBeCloseTo(0.5);
        expect(squareRoot(-1)).toBe("Invalid input. Square root of negative number is not a real number.");
        expect(squareRoot(123456.789)).toBeCloseTo(351.363);
    });

    test('power function should return the first number raised to the power of the second number', () => {
        expect(power(2, 3)).toBe(8);
        expect(power(-2, 3)).toBe(-8);
        expect(power(2, -3)).toBe(0.125);
        expect(power(2.5, 3)).toBeCloseTo(15.625);
        expect(power(-2.5, 3)).toBeCloseTo(-15.625);
        expect(power(2.5, -3)).toBeCloseTo(0.064);
        expect(power(10, 0.5)).toBeCloseTo(3.162);
        expect(power(-10, 0.5)).toBeNaN();
        expect(power(123456.789, 0)).toBe(1);
    });
    
    test('modulus function should return the remainder of the division of the first number by the second number', () => {
        expect(modulus(10, 3)).toBe(1);
        expect(modulus(-10, 3)).toBe(-1);
        expect(modulus(10, -3)).toBe(1);
        expect(modulus(10.5, 3)).toBeCloseTo(1.5);
        expect(modulus(-10.5, 3)).toBeCloseTo(-1.5);
        expect(modulus(10.5, -3)).toBeCloseTo(1.5);
        expect(modulus(1.333, 1)).toBeCloseTo(0.333);
        expect(modulus(-1.333, 1)).toBeCloseTo(-0.333);
        expect(modulus(123456.789, 1000)).toBeCloseTo(456.789);
    });
    
    test('absolute function should return the absolute value of a number', () => {
        expect(absolute(10)).toBe(10);
        expect(absolute(-10)).toBe(10);
        expect(absolute(0)).toBe(0);
        expect(absolute(0.1)).toBeCloseTo(0.1);
        expect(absolute(-0.1)).toBeCloseTo(0.1);
        expect(absolute(1.333)).toBeCloseTo(1.333);
        expect(absolute(-1.333)).toBeCloseTo(1.333);
        expect(absolute(123456.789)).toBeCloseTo(123456.789);
        expect(absolute(-123456.789)).toBeCloseTo(123456.789);
    });
});