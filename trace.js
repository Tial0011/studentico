const fs = require('fs');

const buf = fs.readFileSync('logo.bmp');
const offset = buf.readUInt32LE(10);
const width = buf.readInt32LE(18);
const height = buf.readInt32LE(22);
const bpp = buf.readUInt16LE(28);
const rowSize = Math.floor((bpp * width + 31) / 32) * 4;

const H = Math.abs(height);
const W = width;
const grid = [];
for (let y = 0; y < H; y++) {
  const row = new Uint8Array(W);
  const srcY = height > 0 ? (H - 1 - y) : y;
  const rowOffset = offset + srcY * rowSize;
  for (let x = 0; x < W; x++) {
    const pxOffset = rowOffset + x * (bpp / 8);
    const b = buf[pxOffset];
    const g = buf[pxOffset + 1];
    const r = buf[pxOffset + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    row[x] = lum < 140 ? 1 : 0;
  }
  grid.push(row);
}

const edgeMap = new Map();
function addEdge(x1, y1, x2, y2) {
  const k = `${x1},${y1}`;
  if (!edgeMap.has(k)) edgeMap.set(k, []);
  edgeMap.get(k).push([x2, y2]);
}

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (grid[y][x] === 1) {
      if (y === 0 || grid[y - 1][x] === 0) addEdge(x, y, x + 1, y);
      if (x === W - 1 || grid[y][x + 1] === 0) addEdge(x + 1, y, x + 1, y + 1);
      if (y === H - 1 || grid[y + 1][x] === 0) addEdge(x + 1, y + 1, x, y + 1);
      if (x === 0 || grid[y][x - 1] === 0) addEdge(x, y + 1, x, y);
    }
  }
}

console.log('Total vertices in edgeMap:', edgeMap.size);

const loops = [];
for (const [startK, nexts] of edgeMap.entries()) {
  while (nexts.length > 0) {
    const loop = [];
    const [sx, sy] = startK.split(',').map(Number);
    let curr = [sx, sy];
    loop.push(curr);

    while (true) {
      const k = `${curr[0]},${curr[1]}`;
      const targets = edgeMap.get(k);
      if (!targets || targets.length === 0) break;
      const next = targets.pop();
      if (targets.length === 0) edgeMap.delete(k);

      if (next[0] === sx && next[1] === sy) {
        break;
      }
      loop.push(next);
      curr = next;
    }

    if (loop.length >= 3) {
      loops.push(loop);
    }
  }
}

console.log('Total closed loops:', loops.length);

function rdp(points, epsilon) {
  if (points.length <= 2) return points;
  let dmax = 0;
  let index = 0;
  const a = points[0];
  const b = points[points.length - 1];

  for (let i = 1; i < points.length - 1; i++) {
    const p = points[i];
    const d = perpDist(p, a, b);
    if (d > dmax) {
      index = i;
      dmax = d;
    }
  }

  if (dmax > epsilon) {
    const rec1 = rdp(points.slice(0, index + 1), epsilon);
    const rec2 = rdp(points.slice(index), epsilon);
    return rec1.slice(0, rec1.length - 1).concat(rec2);
  } else {
    return [a, b];
  }
}

function perpDist(p, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const mag = Math.hypot(dx, dy);
  if (mag === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  return Math.abs(dy * p[0] - dx * p[1] + b[0] * a[1] - b[1] * a[0]) / mag;
}

const simplifiedLoops = loops.map(loop => {
  const open = loop.concat([loop[0]]);
  const simp = rdp(open, 0.75);
  simp.pop();
  return simp;
});

console.log('Simplification complete.');

let d = '';
for (const loop of simplifiedLoops) {
  d += `M${loop[0][0]} ${loop[0][1]}`;
  for (let i = 1; i < loop.length; i++) {
    d += `L${loop[i][0]} ${loop[i][1]}`;
  }
  d += 'Z ';
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="100%" height="100%">
  <path fill-rule="evenodd" fill="#111111" d="${d.trim()}"/>
</svg>`;

fs.writeFileSync('test_traced.svg', svg);
console.log('Written test_traced.svg, file size:', svg.length);
