import converge from 'ramda/src/converge';

import equals from 'ramda/src/equals';
import head from 'ramda/src/head';
import last from 'ramda/src/last';



/**
* Test if the first element of an array equals the last
*
* @param {Array}
*
* @return {Boolean}
*/
export default converge(equals, [head, last]);
