const stringapi = require('../lib/index');

let str = '';

console.log(stringapi.isString(str));


let domain = 'https://api.mantiumai.com'
let queryStr = stringapi.objToQueryStr({name: 'kedar', id: 10})
console.log(`${domain}${queryStr}`);

// node sample-code/index.js
