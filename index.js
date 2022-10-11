const { argv } = require("node:process");

const argCount = argv.length - 2;

const [a, b, ...c] = argv;

const argString = c.join(" ");

const vowels = ["a", "e", "i", "o", "u"];

let vowelCount = 0;

for (const element of argString) {
  if (vowels.includes(element.toLowerCase())) {
    vowelCount++;
  }
}

if (argCount === 1) {
  console.log(`Number of Argument Passed: ${argCount}`);
} else {
  console.log(`Number of Arguments Passed: ${argCount}`);
}

if (vowelCount === 0) {
  console.log(`There were No Vowels.`);
} else {
  console.log(`Vowel Count: ${vowelCount}`);
}
