const {readFileSync, writeFileSync, write} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/subfolder/second.txt', 'utf8')


writeFileSync('./content/result-sync.txt',
`Hello Write file : ${first}, ${second}`, {flag: 'a'}
)