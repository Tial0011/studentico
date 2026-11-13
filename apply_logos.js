const fs = require('fs');

const traced = fs.readFileSync('test_traced.svg', 'utf8');
const match = traced.match(/d="([^"]+)"/);
if (!match) {
  console.error('No path data found!');
  process.exit(1);
}
const pathD = match[1];

// 1. studentico-logo.svg (Dark version: #111111)
// Bounding box is x: 55..585, y: 148..418
// Using viewBox="35 130 570 305" gives perfectly balanced 20px padding around all edges
const darkLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="35 130 570 305" role="img" aria-label="Studentico">
  <path fill-rule="evenodd" fill="#111111" d="${pathD}"/>
</svg>
`;

// 2. studentico-logo-light.svg (Light version: #FFF6E9 for dark navy/black footers)
const lightLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="35 130 570 305" role="img" aria-label="Studentico">
  <path fill-rule="evenodd" fill="#FFF6E9" d="${pathD}"/>
</svg>
`;

// 3. studentico-mark.svg (Square brand mark with dark rounded container)
const markLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-label="Studentico mark">
  <rect width="640" height="640" rx="128" fill="#111111"/>
  <path fill-rule="evenodd" fill="#FFF6E9" d="${pathD}"/>
</svg>
`;

// 4. favicon.svg (Favicon for browser tab, crisp square with rounded corners)
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  <rect width="640" height="640" rx="120" fill="#111111"/>
  <path fill-rule="evenodd" fill="#FFA500" d="${pathD}"/>
</svg>
`;

fs.writeFileSync('assets/logo/studentico-logo.svg', darkLogo);
fs.writeFileSync('assets/logo/studentico-logo-light.svg', lightLogo);
fs.writeFileSync('assets/logo/studentico-mark.svg', markLogo);
fs.writeFileSync('favicon.svg', favicon);

console.log('Successfully generated all brand SVG assets!');
