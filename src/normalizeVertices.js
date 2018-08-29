import append from 'ramda/src/append';
import compose from 'ramda/src/compose';
import concat from 'ramda/src/concat';
import converge from 'ramda/src/converge';
import dropLast from 'ramda/src/dropLast';
import equals from 'ramda/src/equals';
import head from 'ramda/src/head';
import identity from 'ramda/src/identity';
import last from 'ramda/src/last';
import reduce from 'ramda/src/reduce';
import useWith from 'ramda/src/useWith';
import when from 'ramda/src/when';



const duplicateHeadVertice = when(
  converge(equals, [last, head]),
  dropLast(1)
);

const removeDuplicateFollowingVertices = reduce(
  (arr, val) => {
    if (equals(last(arr), val)) return arr;
    return append(val, arr)
  },
  []
)



export default reduce(
  useWith(
    concat,
    [
      identity,
      compose(removeDuplicateFollowingVertices, duplicateHeadVertice)
    ]
  ),
  []
)
