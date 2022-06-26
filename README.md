# string-utils
string utility functions in javascript


## Installation

Install [Node.js](https://nodejs.org/en/) on your computer. To install JavaScript Library please use the following command.

```js
  npm install @mantium/string-utils
```

mention in the package.js

```json
  "devDependencies": {
    "@mantium/string-utils": "1.0.0"
  }
```
## Usage

```js
  const stringapi = require('../src/index');
```

### isString

```js
  let str = '';
  console.log(stringapi.isString(str));
```
#### Example of a successful completion response

```js
  true
```


### objToQueryStr

convert object to query param

```js
  let domain = 'https://api.mantiumai.com'
  let queryStr = stringapi.objToQueryStr({name: 'kedar', id: 10})
  console.log(`${domain}${queryStr}`);
```
#### Example of a successful completion response

```js
  https://api.mantiumai.com?name=kedar&id=10
```
