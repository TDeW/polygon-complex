import equals from 'ramda/src/equals';
import identity from 'ramda/src/identity';
import last from 'ramda/src/last';
import useWith from 'ramda/src/useWith';



/**
* Test if a value equals the last element of an array
*
* @param {Any} value
* @param {Array} array
*
* @return {Boolean}
*/
export default useWith(equals, [identity, last]);
