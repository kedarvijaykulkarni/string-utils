# js_str_utils

> Lightweight string utility functions for JavaScript — type checking, transformation, URL helpers, and more.

[![npm version](https://img.shields.io/npm/v/js_str_utils.svg)](https://www.npmjs.com/package/js_str_utils)
[![npm downloads](https://img.shields.io/npm/dm/js_str_utils.svg)](https://www.npmjs.com/package/js_str_utils)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/node/v/js_str_utils.svg)](https://nodejs.org)

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [Validation](#validation)
  - [Type Checking](#type-checking)
  - [String Transformation](#string-transformation)
  - [String Inspection](#string-inspection)
  - [URL Utilities](#url-utilities)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

```bash
npm install js_str_utils
```

Or add it as a dependency in your `package.json`:

```json
"dependencies": {
  "js_str_utils": "^1.4.7"
}
```

---

## Quick Start

```js
const str = require('js_str_utils');

str.isString('hello');          // true
str.capitalize('hello world');  // 'Hello world'
str.truncate('Long text here', 10); // 'Long te...'
str.isPalindrome('madam');      // true
str.objToQueryStr({ page: 1, limit: 10 }); // '?page=1&limit=10'
```

---

## API Reference

All functions are accessed via the single exported object:

```js
const str = require('js_str_utils');
```

> **Note:** Every function throws `Error: Please provided a valid input!` when passed `null`, `undefined`, or an empty string `""` — unless stated otherwise.

---

### Validation

#### `isValid(value)`

Returns `true` if the value is not `null`, not `undefined`, and not an empty string. Numbers are always valid. Throws for invalid input.

```js
str.isValid('hello');  // true
str.isValid(0);        // true
str.isValid(true);     // true
str.isValid([]);       // true
str.isValid('');       // throws Error
str.isValid(null);     // throws Error
```

---

### Type Checking

#### `isNil(value)`

Returns `true` if the value is `null` or `undefined`.

```js
str.isNil(null);       // true
str.isNil(undefined);  // true
str.isNil('hello');    // false
str.isNil(0);          // false
str.isNil('');         // throws Error
```

---

#### `isNull(value)`

Returns `true` if the value is exactly `null`.

```js
str.isNull(null);      // true
str.isNull(undefined); // throws Error
str.isNull('hello');   // false
str.isNull('');        // throws Error
```

---

#### `isNotNil(value)`

Returns `true` if the value is **not** `null` and **not** `undefined`.

```js
str.isNotNil('hello'); // true
str.isNotNil(0);       // true
str.isNotNil(null);    // throws Error
```

---

#### `isNotNull(value)`

Returns `true` if the value is **not** `null`. Returns `false` for `null` or `undefined`.

```js
str.isNotNull('hello');    // true
str.isNotNull(null);       // false
str.isNotNull(undefined);  // false
```

---

#### `isObject(value)`

Returns `true` if the value is an object (including `null` and arrays). Returns `false` for primitives.

```js
str.isObject({});        // true
str.isObject([1, 2]);    // true
str.isObject(null);      // true
str.isObject('hello');   // false
str.isObject(42);        // false
```

---

#### `isString(value)`

Returns `true` if the value is a string type.

```js
str.isString('hello');   // true
str.isString('');        // throws Error
str.isString(123);       // false
str.isString(null);      // throws Error
```

---

#### `isNotEmpty(value)`

Returns `true` if the value has a `length` property greater than `0`. Works on strings and arrays.

```js
str.isNotEmpty('hello'); // true
str.isNotEmpty([1]);     // true
str.isNotEmpty([]);      // false — length is 0
```

---

#### `isNotEmptyString(value)`

Returns `true` if the value is a string **and** has length greater than `0`.

```js
str.isNotEmptyString('hi');  // true
str.isNotEmptyString(123);   // false — not a string
```

---

#### `isNotNilOrEmptyString(value)`

Returns `true` if the value is not `null`, not `undefined`, and is a non-empty string.

```js
str.isNotNilOrEmptyString('hi');        // true
str.isNotNilOrEmptyString(null);        // false
str.isNotNilOrEmptyString(undefined);   // false
```

---

#### `isNumber(value)`

Returns `true` if the value is of type `number`. Returns `false` for `null`, `undefined`, and empty string without throwing.

```js
str.isNumber(42);        // true
str.isNumber(0);         // true
str.isNumber('42');      // false
str.isNumber(null);      // false
str.isNumber(undefined); // false
```

---

#### `isNotNumber(value)`

Returns `true` if the value is **not** a number.

```js
str.isNotNumber('hello'); // true
str.isNotNumber(42);      // false
```

---

#### `hasProperty(obj, key)`

Returns `true` if the object has the given **own** property (does not include inherited/prototype properties).

```js
str.hasProperty({ name: 'Alice' }, 'name'); // true
str.hasProperty({ name: 'Alice' }, 'age');  // false

const obj = Object.create({ inherited: true });
str.hasProperty(obj, 'inherited');          // false — inherited, not own
```

---

#### `isPalindrome(value)`

Returns `true` if the string or number reads the same forwards and backwards. Returns `false` for objects and arrays.

```js
str.isPalindrome('madam');     // true
str.isPalindrome('racecar');   // true
str.isPalindrome(121);         // true
str.isPalindrome('hello');     // false
str.isPalindrome(1234);        // false
str.isPalindrome({});          // false
```

---

### String Transformation

#### `capitalize(str)`

Uppercases the first character of a string. The rest of the string is left unchanged.

```js
str.capitalize('hello');      // 'Hello'
str.capitalize('javaScript'); // 'JavaScript'
str.capitalize('HELLO');      // 'HELLO'
```

---

#### `toTitleCase(str)`

Converts every word's first character to uppercase and the rest to lowercase.

```js
str.toTitleCase('hello world');       // 'Hello World'
str.toTitleCase('the QUICK brown FOX'); // 'The Quick Brown Fox'
```

---

#### `truncate(str, maxLength [, suffix])`

Clips a string to `maxLength` characters. If the string is longer, appends `suffix` (defaults to `'...'`). The returned string is always exactly `maxLength` characters.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `str` | `string` | — | The string to truncate |
| `maxLength` | `number` | — | Maximum character count of the result |
| `suffix` | `string` | `'...'` | Appended when the string is clipped |

```js
str.truncate('Hello, World!', 8);        // 'Hello...'  (8 chars)
str.truncate('Hello, World!', 8, '~');   // 'Hello, ~'  (8 chars)
str.truncate('Hi', 10);                  // 'Hi'        (unchanged, within limit)
```

---

#### `trim(str)`

Removes whitespace from both ends of a string.

```js
str.trim('  hello  ');   // 'hello'
str.trim('\t hi \n');    // 'hi'
```

---

#### `trimStart(str)`

Removes whitespace from the **start** of a string only.

```js
str.trimStart('  hello  '); // 'hello  '
```

---

#### `trimEnd(str)`

Removes whitespace from the **end** of a string only.

```js
str.trimEnd('  hello  '); // '  hello'
```

---

#### `reverseString(str)`

Reverses the characters in a string.

```js
str.reverseString('hello');       // 'olleh'
str.reverseString('Hello World'); // 'dlroW olleH'
str.reverseString('madam');       // 'madam'
```

---

#### `repeat(str, n)`

Returns a new string consisting of `str` repeated `n` times.

```js
str.repeat('ha', 3);   // 'hahaha'
str.repeat('*', 5);    // '*****'
str.repeat('abc', 0);  // ''
```

---

#### `stripHtml(str)`

Removes all HTML tags from a string, leaving only the plain text content.

```js
str.stripHtml('<p>Hello <b>World</b></p>');           // 'Hello World'
str.stripHtml('<a href="/path">Click here</a>');       // 'Click here'
str.stripHtml('No tags here');                         // 'No tags here'
```

---

### String Inspection

#### `startsWith(str, prefix)`

Returns `true` if `str` begins with `prefix`. Case-sensitive.

```js
str.startsWith('Hello World', 'Hello'); // true
str.startsWith('Hello World', 'World'); // false
str.startsWith('Hello World', 'hello'); // false — case-sensitive
```

---

#### `endsWith(str, suffix)`

Returns `true` if `str` ends with `suffix`. Case-sensitive.

```js
str.endsWith('Hello World', 'World'); // true
str.endsWith('Hello World', 'Hello'); // false
str.endsWith('Hello World', 'world'); // false — case-sensitive
```

---

#### `contains(str, substr)`

Returns `true` if `str` contains `substr` anywhere. Case-sensitive.

```js
str.contains('Hello World', 'World');  // true
str.contains('Hello World', 'xyz');    // false
str.contains('JavaScript', 'Script'); // true
```

---

#### `countWords(str)`

Returns the number of words in a string. Handles multiple spaces and leading/trailing whitespace.

```js
str.countWords('Hello World');            // 2
str.countWords('The quick brown fox');    // 4
str.countWords('  extra   spaces  ');     // 2
```

---

#### `countOccurrences(str, substr)`

Returns the number of non-overlapping occurrences of `substr` within `str`. Returns `0` for an empty `substr`.

```js
str.countOccurrences('banana', 'an');        // 2
str.countOccurrences('hello world', 'world'); // 1
str.countOccurrences('hello', 'xyz');         // 0
str.countOccurrences('aaa', 'aa');            // 1  — non-overlapping
str.countOccurrences('hello', '');            // 0
```

---

### URL Utilities

#### `objToQueryStr(obj)`

Converts a plain object to a URL query string.

```js
str.objToQueryStr({ page: 1, limit: 10 }); // '?page=1&limit=10'
str.objToQueryStr({ q: 'node js' });        // '?q=node js'
str.objToQueryStr(null);                    // ''
```

---

#### `readParams(url)`

Parses query parameters from a URL string into a plain key/value object.

```js
str.readParams('https://api.example.com/users?page=1&limit=10');
// { page: '1', limit: '10' }

str.readParams('page=2&sort=asc');
// { page: '2', sort: 'asc' }
```

---

#### `getParam(url, key)`

Returns the value of a single query parameter from a URL string. Returns `undefined` if the key is not found.

```js
str.getParam('https://api.example.com?page=1&limit=10', 'page');  // '1'
str.getParam('https://api.example.com?page=1&limit=10', 'sort');  // undefined
```

---

#### `urlSearch(url)`

Returns a native [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) instance, giving you full access to its built-in methods.

```js
const params = str.urlSearch('page=1&sort=asc&sort=desc');

params.get('page');         // '1'
params.getAll('sort');      // ['asc', 'desc']
params.has('page');         // true
params.set('page', '2');
params.toString();          // 'page=2&sort=asc&sort=desc'
params.delete('sort');
params.append('filter', 'active');
```

---

#### `encodeURI(value)`

Encodes a URI string by escaping characters that are not allowed in a URL.

```js
str.encodeURI('https://example.com/search?q=hello world');
// 'https://example.com/search?q=hello%20world'
```

---

#### `decodeURI(value)`

Decodes a previously encoded URI string back to its original form.

```js
str.decodeURI('https://example.com/search?q=hello%20world');
// 'https://example.com/search?q=hello world'
```

---

## Error Handling

Functions that accept a string argument throw a standard error for invalid inputs:

```js
try {
  str.isString('');
} catch (e) {
  console.error(e.message); // 'Please provided a valid input!'
}
```

**Inputs that always throw:** `""` (empty string), `null`, `undefined`.

**Inputs that never throw (return `false` instead):** `isNumber`, `isNotNull`, `isNotNil` — these handle `null`/`undefined` gracefully for convenience in conditional checks.

---

## Contributing

1. Fork the repository and create a feature branch.
2. Add your function to `src/index.js`.
3. Add a corresponding spec file to `test/`.
4. Ensure all tests pass: `npm test`
5. Open a pull request against `main`.

See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) for detailed contribution instructions.

---

## License

[ISC](./LICENSE) © [Kedar Vijay Kulkarni](https://github.com/kedarvijaykulkarni)
