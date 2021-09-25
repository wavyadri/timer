// process.stdout.write('\x07');

let args = process.argv.slice(2);

const timer = () => {
  if (!args.length) {
    return;
  }

  // sort args so beeps are in order small to big
  args.sort((a, b) => a - b);

  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0 || isNaN(args[i])) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, args[i] * 1000);
  }

  return;
};

let finalTimer = timer();
