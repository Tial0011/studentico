const fs = require('fs');
let code = fs.readFileSync('trace.js', 'utf8');
code = code.replace("console.log('Simplification complete.');", `
console.log('--- Loops analysis ---');
simplifiedLoops.forEach((loop, i) => {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  let area = 0;
  for (let j = 0; j < loop.length; j++) {
    const p1 = loop[j];
    const p2 = loop[(j + 1) % loop.length];
    area += (p1[0] * p2[1] - p2[0] * p1[1]);
    minX = Math.min(minX, p1[0]);
    maxX = Math.max(maxX, p1[0]);
    minY = Math.min(minY, p1[1]);
    maxY = Math.max(maxY, p1[1]);
  }
  area = Math.abs(area) / 2;
  console.log(\`Loop \${i}: points=\${loop.length}, bbox=[\${minX},\${minY} - \${maxX},\${maxY}], w=\${maxX-minX}, h=\${maxY-minY}, area=\${area.toFixed(1)}\`);
});
`);
fs.writeFileSync('inspect_loops.js', code);
