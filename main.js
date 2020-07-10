const emagiSearch = require('./emagi-search.js');
const emagify = require('./emagify.js');
const randomElement = require('./emagi-random.js');

const isIt = emagiSearch(search)
const search = process.argv[2]
const randomElement = process.argv[2]
const convert = process.argv[2]
const word = process.argv[3]
const quadStr = process.argv[4]
const searchResult = emagiSearch(search)

console.log(searchResult)

let result = '';
if (search && quadStr || randomElement && word) {
    result = `output`;
} else if (search && word) {
    result = searchEmojis(word).join('')
} else if (convert && userText) {
    result = convertWords(userText).join('')
} else if (randomElement) {
    result = randomEmojis(isIt)
}
console.log(result)