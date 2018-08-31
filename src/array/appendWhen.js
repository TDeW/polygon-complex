import append from 'ramda/src/append';
import curryN from 'ramda/src/curryN';
import when from 'ramda/src/when';



/**
* When condition is fulfilled append a value to an array,
* return the array otherwise
*
* @param {Function} condition curried function val => array => truth
* @param {Any} value
* @param {Array} array
*/
export default curryN(2,
  (condition, value) =>
    when(
      condition(value),
      append(value)
    )
);
