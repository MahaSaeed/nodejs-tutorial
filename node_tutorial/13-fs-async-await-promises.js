const {readFile, writeFile, write} = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path,'utf-8', (err, result) => {

            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(result)
            }
        })
    })
}
 */
const start = async() =>
{
    try
    {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt','utf-8');
        console.log(first)
        console.log(second);
        const third = await writeFile('./content/third-mind-grenade.txt', `This is awesome! ${first} ${second}`, {flag:'a'})
    }
    catch(error)
    {
        console.log(error);
    }
   
}

start()