const {readFileSync, writeFileSync} = require('fs');
console.log('Start');
const first = readFileSync('./Content/first.txt', 'utf8');
const second = readFileSync('./Content/second.txt', 'utf8');


console.log(first);

console.log(second);

writeFileSync('./Content/third.txt', `Here is the result:: ${first}, ${second}.`, {flag:'a'})

console.log('done with this task');
console.log('Starting the next task');