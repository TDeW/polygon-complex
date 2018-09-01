import curryN from 'ramda/src/curryN';



/**
* Reduce an array with a curried function
*
* @param {Function} reducer curried function
*                           value => accumulator => newAccumulator value
* @param {Any} accumulator starting value
* @param {Array} array
*
* @return {Array}
*/
export default curryN(3,
  (reducer, accumulator, array) => {
    const { length } = array;

    let i = 0;
    while (i < length) {
      accumulator = reducer(array[i++])(accumulator);
    }

    return accumulator;
  }
);
