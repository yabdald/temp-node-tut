const { log } = require('console');
const path = require('path');

console.log(path.sep)

const filePath = path.join('/content','subfolder','text.txt')

console.log(filePath)

const absulate = path.resolve(__dirname, 'content', 'subfolder','text.txt')

console.log(absulate);

