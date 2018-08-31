import removeFollowingDuplicates from '../../array/removeFollowingDuplicates';



describe('array/removeFollowingDuplicates', () => {

  test('should do nothing on empty array', () => {
    const tested = [];
    const expected = [];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should do nothing on one number array', () => {
    const tested = [1];
    const expected = [1];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should do nothing on one object array', () => {
    const tested = [{ val: 1 }];
    const expected = [{ val: 1 }];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should do nothing on one array array', () => {
    const tested = [[1]];
    const expected = [[1]];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one number on an pair of duplicate numbers', () => {
    const tested = [1, 1];
    const expected = [1];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one object on an pair of equal objects', () => {
    const tested = [{ val: 1 }, { val: 1 }];
    const expected = [{ val: 1 }];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one array on an pair of equal arrays', () => {
    const tested = [[1], [1]];
    const expected = [[1]];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should do nothing an pair of non-duplicate numbers', () => {
    const tested = [1, 2];
    const expected = [1, 2];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should do nothing an pair of not equal objects', () => {
    const tested = [{ val: 1 }, { val: 2 }];
    const expected = [{ val: 1 }, { val: 2 }];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should do nothing an pair of not equal arrays', () => {
    const tested = [[1], [2]];
    const expected = [[1], [2]];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one number from an array of numbers with leading duplicates', () => {
    const tested = [1, 1, 2];
    const expected = [1, 2];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one object from an array of objects with leading duplicates', () => {
    const tested = [{ val: 1 }, { val: 1 }, { val: 2 }];
    const expected = [{ val: 1 }, { val: 2 }];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one array from an array of arrays with leading duplicates', () => {
    const tested = [[1], [1], [2]];
    const expected = [[1], [2]];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one number from an array of numbers with trailing duplicates', () => {
    const tested = [1, 2, 2];
    const expected = [1, 2];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one object from an array of objects with trailing duplicates', () => {
    const tested = [{ val: 1 }, { val: 2 }, { val: 2 }];
    const expected = [{ val: 1 }, { val: 2 }];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one array from an array of arrays with trailing duplicates', () => {
    const tested = [[1], [2], [2]];
    const expected = [[1], [2]];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one number from an array of numbers with median duplicates', () => {
    const tested = [1, 2, 2, 3];
    const expected = [1, 2, 3];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one object from an array of objects with median duplicates', () => {
    const tested = [{ val: 1 }, { val: 2 }, { val: 2 }, { val: 3 }];
    const expected = [{ val: 1 }, { val: 2 }, { val: 3 }];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

  test('should remove one array from an array of arrays with median duplicates', () => {
    const tested = [[1], [2], [2], [3]];
    const expected = [[1], [2], [3]];
    const result = removeFollowingDuplicates(tested);

    expect(result).toEqual(expected)
    expect(result).not.toBe(expected) // immutable
  })

})
