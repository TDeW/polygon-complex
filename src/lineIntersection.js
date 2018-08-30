import arrayEquals from './arrayEquals';



// Function to compute where two lines (not segments) intersect.
// From https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
export default (start0, end0, start1, end1) => {
  if (
    arrayEquals(start0,start1) ||
    arrayEquals(start0,end1) ||
    arrayEquals(end0,start1) ||
    arrayEquals(end1,start1)
  ) return null;

  const [x0, y0] = start0;
  const [x1, y1] = end0;
  const [x2, y2] = start1;
  const [x3, y3] = end1;

  let denom = (x0 - x1) * (y2 - y3) - (y0 - y1) * (x2 - x3);
  if (denom == 0) return null;
  
  return [
    ((x0 * y1 - y0 * x1) * (x2 - x3) - (x0 - x1) * (x2 * y3 - y2 * x3)) / denom,
    ((x0 * y1 - y0 * x1) * (y2 - y3) - (y0 - y1) * (x2 * y3 - y2 * x3)) / denom
  ];
}
