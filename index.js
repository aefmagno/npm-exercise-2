const { argv } = require('node:process');

const argCount = argv.length - 2;

const [a, b, ...c] = argv;

const argString = c.join(' ');

const vowel = ['a', 'e' ,'i' ,'o' ,'u'];

let vowelCount = 0;

for (const element of argString) {
    if (vowel.includes(element.toLowerCase())) {
        vowelCount++;
    }
}

console.log(`Number of Argument/s Passed: ${argCount}`);
console.log(`Vowel/s: ${vowelCount}`);
