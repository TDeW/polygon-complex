import allPass from 'ramda/src/allPass';
import when from 'ramda/src/when';

import dropLast1 from '../internals/dropLast1';
import lengthGreaterThan1 from '../internals/lengthGreaterThan1';
import headEqualsLast from './headEqualsLast';



/**
* Remove the last element of an array if it equals the last
*
* @param {Array}
*
* @return {Array}
*/
export default when(
  allPass([lengthGreaterThan1, headEqualsLast]),
  dropLast1
);
