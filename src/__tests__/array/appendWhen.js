import always from 'ramda/src/always';

import appendWhen from '../../array/appendWhen';



describe('array/appendWhen', () => {

  test('should be a function', () => {
    expect(appendWhen).toBeInstanceOf(Function);
  });

  test('should append when condition returns true', () => {
    expect(appendWhen(always(always(true)), 1)([])).toEqual([1]);
  });

  test('should not append when condition returns false', () => {
    expect(appendWhen(always(always(false)), 1)([])).toEqual([]);
  });

});
