const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

//callback 

console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return

        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Hello Write file : ${first}, ${second}`, 
            (err, result)=> {
                if(err){
                    console.log(err)
                    return
                }
                console.log('End With this task');
            }
        )


    })
})

console.log('Start with the next Task');