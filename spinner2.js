let time = 0;
let spinner = ["|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-   ", "\\   "];
for (let spin of spinner) {
  setTimeout (() => {
    process.stdout.write(`\r ${spin}`);
  }, time += 200)
}

setTimeout (() => {
  process.stdout.write('\n')
}, time)
