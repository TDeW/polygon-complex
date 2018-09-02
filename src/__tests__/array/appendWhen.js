import curryN from 'ramda/src/curryN';

import appendWhen from '../../array/appendWhen';



/* eslint-disable no-unused-vars */
const always = curryN(2, (value, array) => true);
const never = curryN(2, (value, array) => false);
/* eslint-enable no-unused-vars */



describe('array/appendWhen', () => {

  test('should be a function', () => {
    expect(appendWhen).toBeInstanceOf(Function);
  });

  test('should return a function when called with one argument', () => {
    // PARAMS
    const condition = always;


    expect(appendWhen(condition)).toBeInstanceOf(Function);
    expect(appendWhen(condition)).not.toThrow();
  });

  test('should return a function when called with two argument', () => {
    // PARAMS
    const condition = always;
    const value = 1;


    expect(() => appendWhen(condition)(value)).not.toThrow();
    expect(appendWhen(condition)(value)).toBeInstanceOf(Function);
  });

  test('should not throw when called with three arguments', () => {
    // PARAMS
    const condition = always;
    const value = 1;
    const array = [];


    expect(() => appendWhen(condition)(value)(array)).not.toThrow();
  });

  test('should return an array', () => {
    // PARAMS
    const condition = always;
    const value = 1;
    const array = [];


    expect(appendWhen(condition)(value)(array)).toBeInstanceOf(Array);
  });

  test('should append to array when condition returns true', () => {
    // PARAMS
    const condition = always;
    const value = 1;
    const array = [];

    // RESULT
    const expected = [1];


    expect(appendWhen(condition)(value)(array)).toEqual(expected);
  });

  test('should not append when condition returns false', () => {
    // PARAMS
    const condition = never;
    const value = 1;
    const array = [];

    // RESULT
    const expected = [];


    expect(appendWhen(condition)(value)(array)).toEqual(expected);
  });

  test('should append based on condition results', () => {
    const tested = [
      {
        // PARAMS
        condition: value => array => value === array[0],
        value: 1,
        array: [1],

        // RESULT
        expected: [1, 1],
      },
      {
        // PARAMS
        condition: value => array => value === array[0],
        value: 2,
        array: [1],

        // RESULT
        expected: [1],
      },
      {
        // PARAMS
        condition: value => () => value % 2 === 0,
        value: 2,
        array: [1],

        // RESULT
        expected: [1, 2],
      },
      {
        // PARAMS
        condition: value => array => value % 2 === array[0] % 2,
        value: 2,
        array: [1],

        // RESULT
        expected: [1],
      },
    ];


    tested.forEach(({ condition, value, array, expected }) => {
      expect(appendWhen(condition)(value)(array)).toEqual(expected);
    });
  });

});
