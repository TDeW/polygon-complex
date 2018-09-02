import filterExtremeDuplicates from '../../array/filterExtremeDuplicates';



describe('array/filterExtremeDuplicates', () => {

  test('should be a function', () => {
    expect(filterExtremeDuplicates).toBeInstanceOf(Function);
  });

  test('should return an array', () => {
    // PARAMS
    const array = [];


    expect(filterExtremeDuplicates(array)).toBeInstanceOf(Array);
  });

  test('should do nothing on empty array', () => {
    // PARAMS
    const array = [];

    // RESULT
    const expected = [];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing on one number array', () => {
    // PARAMS
    const array = [1];

    // RESULT
    const expected = [1];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing on one object array', () => {
    // PARAMS
    const array = [{ val: 1 }];

    // RESULT
    const expected = [{ val: 1 }];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing on one array array', () => {
    // PARAMS
    const array = [[1]];

    // RESULT
    const expected = [[1]];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one number on an pair of duplicate numbers', () => {
    // PARAMS
    const array = [1, 1];

    // RESULT
    const expected = [1];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one object on an pair of equal objects', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 1 }];

    // RESULT
    const expected = [{ val: 1 }];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one array on an pair of equal arrays', () => {
    // PARAMS
    const array = [[1], [1]];

    // RESULT
    const expected = [[1]];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing an pair of non-duplicate numbers', () => {
    // PARAMS
    const array = [1, 2];

    // RESULT
    const expected = [1, 2];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing an pair of not equal objects', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 2 }];

    // RESULT
    const expected = [{ val: 1 }, { val: 2 }];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should do nothing an pair of not equal arrays', () => {
    // PARAMS
    const array = [[1], [2]];

    // RESULT
    const expected = [[1], [2]];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter last item from an array of numbers with extreme duplicates', () => {
    // PARAMS
    const array = [1, 2, 1];

    // RESULT
    const expected = [1, 2];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter last object from an array of objects with extreme duplicates', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 2 }, { val: 1 }];

    // RESULT
    const expected = [{ val: 1 }, { val: 2 }];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter last array from an array of arrays with extreme duplicates', () => {
    // PARAMS
    const array = [[1], [2], [1]];

    // RESULT
    const expected = [[1], [2]];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should not filter last number from an array of numbers with trailing duplicates', () => {
    // PARAMS
    const array = [1, 2, 2];

    // RESULT
    const expected = [1, 2, 2];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should not filter last object from an array of objects with trailing duplicates', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 2 }, { val: 2 }];

    // RESULT
    const expected = [{ val: 1 }, { val: 2 }, { val: 2 }];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should not filter last array from an array of arrays with trailing duplicates', () => {
    // PARAMS
    const array = [[1], [2], [2]];

    // RESULT
    const expected = [[1], [2], [2]];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should not filter last number from an array of numbers with median duplicates', () => {
    // PARAMS
    const array = [1, 2, 2, 3];

    // RESULT
    const expected = [1, 2, 2, 3];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one object from an array of objects with median duplicates', () => {
    // PARAMS
    const array = [{ val: 1 }, { val: 2 }, { val: 2 }, { val: 3 }];

    // RESULT
    const expected = [{ val: 1 }, { val: 2 }, { val: 2 }, { val: 3 }];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

  test('should filter one array from an array of arrays with median duplicates', () => {
    // PARAMS
    const array = [[1], [2], [2], [3]];

    // RESULT
    const expected = [[1], [2], [2], [3]];


    expect(filterExtremeDuplicates(array)).toEqual(expected);
    expect(filterExtremeDuplicates(array)).not.toBe(expected); // immutable
  });

});
