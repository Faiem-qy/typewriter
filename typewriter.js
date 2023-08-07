const sentence = "hello there from lighthouse labs ";
const letters = sentence.split("");

let delay = 0

for (const char of letters) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 100;
}
