import concat from 'ramda/src/concat';
import identity from 'ramda/src/identity';
import reduce from 'ramda/src/reduce';
import useWith from 'ramda/src/useWith';

import filterDuplicates from './polygon/filterDuplicates';



export default reduce(
  useWith(
    concat,
    [identity, filterDuplicates]
  ),
  []
);
