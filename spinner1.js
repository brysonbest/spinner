//animates a spinner; demonstrates the use of \r to re-write over a line by moving back to the beginning of the line

process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 1700);

setTimeout(() => {
  console.log();
}, 1750);