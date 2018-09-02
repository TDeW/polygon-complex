import compose from 'ramda/src/compose';

import filterFollowingDuplicates from '../array/filterFollowingDuplicates';
import filterExtremeDuplicates from '../array/filterExtremeDuplicates';



/**
* Remove the duplicates points of a polygon
*
* @param {Array}
*
* @return {Array}
*/
export default compose(
  filterFollowingDuplicates,
  filterExtremeDuplicates
);
