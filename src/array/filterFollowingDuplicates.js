import complement from 'ramda/src/complement';

import emptyArray from '../internals/emptyArray';
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
  emptyArray
);
