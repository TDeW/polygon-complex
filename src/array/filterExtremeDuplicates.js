import when from 'ramda/src/when';

import dropLast1 from '../internals/dropLast1';
import headEqualsLast from './headEqualsLast';



/**
* Remove the last element of an array if it equals the last
*
* @param {Array}
*
* @return {Array}
*/
export default when(
  headEqualsLast,
  dropLast1
);
