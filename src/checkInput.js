import converge from 'ramda/src/converge';
import identity from 'ramda/src/identity';
import pathEq from 'ramda/src/pathEq';
import propEq from 'ramda/src/propEq';
import propIs from 'ramda/src/propIs';
import unless from 'ramda/src/unless';



const throwNotAValidGeoJSONError = () => {
  throw new Error('The input must be a geojson object of type Feature');
}

const throwEmptyGeoJSONGeometryError = () => {
  throw new Error('The input geojson must not have an empty geometry');
}

const throwGeoJSONGeometryNotAPolygonError = () => {
  throw new Error('The input geojson geometry must be a Polygon');
}




export default converge(identity, [
  unless(propEq('type', 'Feature'), throwNotAValidGeoJSONError),
  unless(propIs(Object, 'geometry'), throwEmptyGeoJSONGeometryError),
  unless(pathEq(['geometry', 'type'], 'Polygon'), throwGeoJSONGeometryNotAPolygonError),
])
