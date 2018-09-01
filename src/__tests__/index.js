import { featureCollection } from '@turf/helpers';
import { featureEach } from '@turf/meta';
import fs from 'fs';
import load from 'load-json-file';
import path from 'path';
import write from 'write-json-file';

import polygonComplex from '..';



const directories = {
  in: path.join(__dirname, 'in') + path.sep,
  out: path.join(__dirname, 'out') + path.sep,
};

const fixtures = fs.readdirSync(directories.in).map(filename => ({
  filename,
  name: path.parse(filename).name,
  geojson: load.sync(directories.in + filename),
}));

function colorize (features, colors = ['#F00', '#00F', '#0F0', '#F0F', '#FFF'], width = 6) {
  const results = [];
  featureEach(features, (feature, index) => {
    const color = colors[index % colors.length];
    feature.properties = Object.assign(feature.properties, {
      stroke: color,
      fill: color,
      'stroke-width': width,
      'fill-opacity': 0.1,
    });
    results.push(feature);
  });
  return featureCollection(results);
}


describe('polygon-complex', () => {
  test('should match', () => {
    for (const { filename, name, geojson } of fixtures) {
      const results = colorize(polygonComplex(geojson));

      if (process.env.REGEN) write.sync(directories.out + filename, results);
      expect(results).toEqual(load.sync(directories.out + filename), name);
    }
  });
});
