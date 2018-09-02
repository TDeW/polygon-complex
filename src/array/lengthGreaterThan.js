import identity from 'ramda/src/identity';
import length from 'ramda/src/length';
import lt from 'ramda/src/lt';
import useWith from 'ramda/src/useWith';



/**
* Test if the length of an array is greater than a value
*
* @param {Number} length
* @param {Array}
*
* @return {Boolean}
*/
export default useWith(lt, [identity, length]);
