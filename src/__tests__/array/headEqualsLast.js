import headEqualsLast from '../../array/headEqualsLast';



describe('array/headEqualsLast', () => {

  test('should be a function', () => {
    expect(headEqualsLast).toBeInstanceOf(Function);
  });

  test('should not throw when called with one argument', () => {
    // PARAMS
    const array = [];


    expect(() => headEqualsLast(array)).not.toThrow();
  });

  test('should return a boolean', () => {
    // PARAMS
    const array = [];


    expect(typeof headEqualsLast(array)).toEqual('boolean');
  });

  test('should return true when the array has one element', () => {
    // PARAMS
    const array = [1];

    // RESULT
    const expected = true;


    expect(headEqualsLast(array)).toEqual(expected);
  });

  test('should return true when the array head and last match', () => {
    // PARAMS
    const array = [1, 2, 1];

    // RESULT
    const expected = true;


    expect(headEqualsLast(array)).toEqual(expected);
  });

  test('should return false when the array head and last does not match', () => {
    // PARAMS
    const array = [1, 2, 3];

    // RESULT
    const expected = false;


    expect(headEqualsLast(array)).toEqual(expected);
  });

});
