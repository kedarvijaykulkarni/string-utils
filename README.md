# string-utils
string utility functions in javascript


## Installation

Install [Node.js](https://nodejs.org/en/) on your computer. To install JavaScript Library please use the following command.

```js
  npm install js_str_utils
```

mention in the package.js

```json
  "devDependencies": {
    "js_str_utils": "1.4.2"
  }
```
## Usage

```js
  const stringApi = require('../src/index');
```

### isString

```js
  let str = '';
  console.log(stringApi.isString(str));
```
#### Example of a successful completion response

```js
  true
```


### objToQueryStr

convert object to query param

```js
  let domain = 'https://api.github.com'
  let queryStr = stringApi.objToQueryStr({users: 'kedman1234', id: 10})
  console.log(`${domain}${queryStr}`);
```
#### Example of a successful completion response

```js
  https://api.github.com/?users=kedman1234&id=834949
```
