import complement from 'ramda/src/complement';

import EMPTY_ARRAY from '../internals/EMPTY_ARRAY';
import appendWhen from './appendWhen';
import equalsLast from './equalsLast';
import reduce from './reduce';



/**
* Remove the following duplicates of an Array
* using deep equals comparison
*
* @param {Array}
*
* @return {Array}
*/
export default reduce(
  appendWhen(complement(equalsLast)),
  EMPTY_ARRAY
);
