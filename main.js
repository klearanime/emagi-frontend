const emagiSearch = require('./emagi-search.js');
const emagify = require('./emagify.js');
const randomElement = require('./emagi-random.js');



const search = process.argv[2]
const searchResult = emagiSearch(search)
const convert = emagiSearch(search)
const isIt = emagiSearch(search)


console.log(searchResult)
console.log('Is this the appropiate ' + isIt)

