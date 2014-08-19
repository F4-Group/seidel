'use strict';

module.exports = Edge;

function Edge(p, q) {
    this.p = p;
    this.q = q;
    this.slope = (q.y - p.y) / (q.x - p.x);
    this.mpoints = [];
    this.below = null;
    this.above = null;
}
