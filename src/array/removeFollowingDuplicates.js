import append from 'ramda/src/append';
import equals from 'ramda/src/equals';
import last from 'ramda/src/last';
import reduce from 'ramda/src/reduce';



/**
* Remove the following duplicates of an Array
* using deep equals comparison
*
* @param {Array}
* @return {Array}
*/
export default reduce(
  (arr, val) => {
    if (equals(last(arr), val)) return arr;
    return append(val, arr)
  },
  []
);
