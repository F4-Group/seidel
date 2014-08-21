## Seidel's polygon triangulation

A crazy fast JavaScript implementation of polygon triangulation based on [Seidel's incremental randomized algorithm](https://www.cs.princeton.edu/courses/archive/fall05/cos528/handouts/A%20Simple%20and%20fast.pdf), created to be used in WebGL apps.

Initially ported from earlier versions of [poly2tri](https://code.google.com/p/poly2tri/) by Mason Green,
it since has been heavily optimized and improved.
Currently only supports strictly simple polygons with holes (no intersecting/overlapping edges).

#### Usage

```js
var points = [[[10, 0], [0, 50], [60, 60], [70, 10]]];
seidel(points); // returns an array of triangles (arrays of 3 point objects each)
```

#### Why another triangulation library?

The aim of this project is to create a JS triangulation library that is **fast enough for real-time triangulation in the browser**,
sacrificing triangulation quality for raw speed.

In the current benchmarks, its performance already surpsasses the fastest existing libraries:

(ops/sec) | points | seidel | poly2tri | libtess | fastest vs 2nd fastest
--- | --- | --- | --- | --- | ---
OSM building | 15 | _64,110_ | _29,127_ | _22,287_ | seidel vs poly2tri, 120% faster
dude shape | 94 | _8,103_ | _3,962_ | _4,605_ | seidel vs libtess, 76% faster
nazca monkey | 1204 | _539_ | _277_ | _335_ | seidel vs libtess, 61% faster

#### To Do

- eliminate current performance bottlenecks [#1](https://github.com/mapbox/seidel/issues/1)
- handle degenerate cases (e.g. segments touching edges, edges touching edges) [#5](https://github.com/mapbox/seidel/issues/5)
- cover with tests [#3](https://github.com/mapbox/seidel/issues/3)

#### Browser builds

```bash
npm install
npm run build-dev # builds dist/seidel.dev.js, a dev version with a source map
npm run build-min # builds dist/seidel.min.js, a minified production build
```

![](https://cloud.githubusercontent.com/assets/25395/3972752/a028e4c8-27e0-11e4-8bc6-134bd87f4655.png)

