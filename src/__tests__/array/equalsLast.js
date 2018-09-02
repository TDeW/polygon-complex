import equalsLast from '../../array/equalsLast';



describe('array/equalsLast', () => {

  test('should be a function', () => {
    expect(equalsLast).toBeInstanceOf(Function);
  });

  test('should return a function when called with one argument', () => {
    // PARAMS
    const value = 1;


    expect(equalsLast(value)).toBeInstanceOf(Function);
    expect(equalsLast(value)).not.toThrow();
  });

  test('should not throw when called with two arguments', () => {
    // PARAMS
    const value = 1;
    const array = [];


    expect(() => equalsLast(value)(array)).not.toThrow();
  });

  test('should return a boolean', () => {
    // PARAMS
    const value = 1;
    const array = [];


    expect(typeof equalsLast(value)(array)).toEqual('boolean');
  });

  test('should return true when value and last item or array match', () => {
    // PARAMS
    const value = 1;
    const array = [1];

    // RESULT
    const expected = true;


    expect(equalsLast(value)(array)).toEqual(expected);
  });

  test('should return false when value and last item or array doese not match', () => {
    // PARAMS
    const value = 1;
    const array = [2];

    // RESULT
    const expected = false;


    expect(equalsLast(value)(array)).toEqual(expected);
  });

});
