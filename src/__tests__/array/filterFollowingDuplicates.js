import filterFollowingDuplicates from '../../array/filterFollowingDuplicates';



describe('array/filterFollowingDuplicates', () => {

  test('should be a function', () => {
    expect(filterFollowingDuplicates).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    // PARAMS
    const array = [];


    expect(filterFollowingDuplicates(array)).toBeInstanceOf(Array);
  });

  test('should do nothing on empty array', () => {
    // PARAMS
    const array = [];

    // RESULT
    const expected = [];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing on one number array', () => {
    // PARAMS
    const array = [1];

    // RESULT
    const expected = [1];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing on one object array', () => {
    // PARAMS
    const array = [{ val: 1 }];

    // RESULT
    const expected = [{ val: 1 }];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing on one array array', () => {
    // PARAMS
    const array = [[1]];

    // RESULT
    const expected = [[1]];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one number on an pair of duplicate numbers', () => {
    // PARAMS
    const array = [1, 1];

    // RESULT
    const expected = [1];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one object on an pair of equal objects', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 1 }];

    // RESULT
    const expected = [{ val: 1 }];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one array on an pair of equal arrays', () => {
    // PARAMS
    const array = [[1], [1]];

    // RESULT
    const expected = [[1]];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing an pair of non-duplicate numbers', () => {
    // PARAMS
    const array = [1, 2];

    // RESULT
    const expected = [1, 2];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing an pair of not equal objects', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 2 }];

    // RESULT
    const expected = [{ val: 1 }, { val: 2 }];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing an pair of not equal arrays', () => {
    // PARAMS
    const array = [[1], [2]];

    // RESULT
    const expected = [[1], [2]];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one number from an array of numbers with leading duplicates', () => {
    // PARAMS
    const array = [1, 1, 2];

    // RESULT
    const expected = [1, 2];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one object from an array of objects with leading duplicates', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 1 }, { val: 2 }];

    // RESULT
    const expected = [{ val: 1 }, { val: 2 }];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one array from an array of arrays with leading duplicates', () => {
    // PARAMS
    const array = [[1], [1], [2]];

    // RESULT
    const expected = [[1], [2]];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one number from an array of numbers with trailing duplicates', () => {
    // PARAMS
    const array = [1, 2, 2];

    // RESULT
    const expected = [1, 2];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one object from an array of objects with trailing duplicates', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 2 }, { val: 2 }];

    // RESULT
    const expected = [{ val: 1 }, { val: 2 }];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one array from an array of arrays with trailing duplicates', () => {
    // PARAMS
    const array = [[1], [2], [2]];

    // RESULT
    const expected = [[1], [2]];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one number from an array of numbers with median duplicates', () => {
    // PARAMS
    const array = [1, 2, 2, 3];

    // RESULT
    const expected = [1, 2, 3];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one object from an array of objects with median duplicates', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 2 }, { val: 2 }, { val: 3 }];

    // RESULT
    const expected = [{ val: 1 }, { val: 2 }, { val: 3 }];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one array from an array of arrays with median duplicates', () => {
    // PARAMS
    const array = [[1], [2], [2], [3]];

    // RESULT
    const expected = [[1], [2], [3]];


    expect(filterFollowingDuplicates(array)).toEqual(expected);
    expect(filterFollowingDuplicates(array)).not.toBe(expected); // immutable
  });

});
