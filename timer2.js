const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // The user can press b and it should beep right away-
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (Number(key) && key > 0 && key < 10) {
    // The user can input any number from 1 to 9 and it should
    // immediately output "setting timer for x seconds...", and
    // beep after that number of seconds has passed
    key === '1'
      ? console.log(`Setting timer for ${key} second...`)
      : console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  } else if (key === '\u0003') {
    // The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
    process.exit();
  }
});
