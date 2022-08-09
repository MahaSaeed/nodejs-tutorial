const {writeFileSync} = require('fs')
for(let i=00;i<10000;i++)
{
    writeFileSync('./content/bigFile.txt',`hello world ${i}th times\n`, {flag:'a'})
}