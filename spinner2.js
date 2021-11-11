//animates a spinner; demonstrates the use of \r to re-write over a line by moving back to the beginning of the line

let time = 100;
let loop = ["|", "/", "-", `\\`,`|`, "/", "-", `\\`,`|`];
for (let char of loop) {
  setTimeout(() => {
    process.stdout.write(`\r${char}  `);
  }, time);
  time += 200;
}
setTimeout(() => {
  console.log();
}, time);