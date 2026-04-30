---
title: js_str_utils — Documentation
description: Lightweight string utility functions for JavaScript
---

# js_str_utils

> Lightweight string utility functions for JavaScript — type checking, transformation, URL helpers, and more.  
> Zero runtime dependencies. Node.js ≥ 18.

[![npm](https://img.shields.io/npm/v/js_str_utils.svg)](https://www.npmjs.com/package/js_str_utils)
[![downloads](https://img.shields.io/npm/dm/js_str_utils.svg)](https://www.npmjs.com/package/js_str_utils)
[![license](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## Installation

```bash
npm install js_str_utils
```

```js
const str = require('js_str_utils');
```

---

## Error Contract

Every function that accepts a string throws the same error for invalid input:

| Input | Behaviour |
|---|---|
| `""` empty string | throws `Error: Please provided a valid input!` |
| `null` | throws `Error: Please provided a valid input!` |
| `undefined` | throws `Error: Please provided a valid input!` |

---

## API Reference

### Validation

#### `isValid(value)`
Returns `true` if the value is not `null`, not `undefined`, and not an empty string. Numbers always pass.

```js
str.isValid('hello');   // true
str.isValid(0);         // true
str.isValid('');        // throws Error
str.isValid(null);      // throws Error
```

---

### Nil & Null Checks

#### `isNil(value)`
`true` if value is `null` or `undefined`.

```js
str.isNil(null);       // true
str.isNil(undefined);  // true
str.isNil('hello');    // false
```

#### `isNotNil(value)`
`true` if value is neither `null` nor `undefined`. Throws for nil values.

```js
str.isNotNil('hello'); // true
str.isNotNil(null);    // throws Error
```

#### `isNull(value)`
`true` if value is exactly `null`. Throws for `undefined`.

```js
str.isNull(null);       // true
str.isNull(undefined);  // throws Error
str.isNull('hello');    // false
```

#### `isNotNull(value)`
`true` if value is not `null`. Returns `false` for `null` and `undefined` without throwing.

```js
str.isNotNull('hello');    // true
str.isNotNull(null);       // false
str.isNotNull(undefined);  // false
```

---

### Type Checks

#### `isString(value)`
`true` if the value is of type `string`.

```js
str.isString('hello');  // true
str.isString(123);      // false
str.isString(null);     // throws Error
```

#### `isNotEmpty(value)`
`true` if the value has `length > 0`. Works on strings and arrays.

```js
str.isNotEmpty('hi');    // true
str.isNotEmpty([1, 2]);  // true
str.isNotEmpty([]);      // false
```

#### `isNotEmptyString(value)`
`true` only when the value is both a `string` type and non-empty.

```js
str.isNotEmptyString('hi');   // true
str.isNotEmptyString(123);    // false
```

#### `isNotNilOrEmptyString(value)`
`true` only when value is not nil and is a non-empty string. Returns `false` for nil without throwing.

```js
str.isNotNilOrEmptyString('hi');   // true
str.isNotNilOrEmptyString(null);   // false
str.isNotNilOrEmptyString(123);    // false
```

#### `isNumber(value)`
`true` if value is of type `number`. Returns `false` for `null`/`undefined`/`""` without throwing.

```js
str.isNumber(42);        // true
str.isNumber(0);         // true
str.isNumber('42');      // false
str.isNumber(null);      // false
```

#### `isNotNumber(value)`
`true` if value is not a number.

```js
str.isNotNumber('hi');  // true
str.isNotNumber(42);    // false
```

---

### Object & Property Helpers

#### `isObject(value)`
`true` for objects, arrays, and `null` (`typeof null === 'object'`). `false` for primitives.

```js
str.isObject({});       // true
str.isObject([1, 2]);   // true
str.isObject(null);     // true
str.isObject('hello');  // false
```

#### `hasProperty(obj, key)`
`true` if `obj` has `key` as an **own** property. Inherited properties return `false`.

```js
str.hasProperty({ name: 'Alice' }, 'name');  // true
str.hasProperty({ name: 'Alice' }, 'age');   // false

const child = Object.create({ inherited: true });
str.hasProperty(child, 'inherited');  // false
```

#### `isPalindrome(value)`
`true` if a string or number reads the same forwards and backwards.

```js
str.isPalindrome('madam');   // true
str.isPalindrome(121);       // true
str.isPalindrome('hello');   // false
str.isPalindrome({});        // false — no throw
```

| Input | Result |
|---|---|
| `"madam"` | `true` |
| `"racecar"` | `true` |
| `121` | `true` |
| `"hello"` | `false` |
| `1234` | `false` |
| `{}` / `[]` | `false` |

---

### String Transformation

#### `capitalize(str)`
Uppercases the first character; leaves the rest unchanged.

```js
str.capitalize('hello');      // 'Hello'
str.capitalize('javaScript'); // 'JavaScript'
```

#### `toTitleCase(str)`
Every word's first character uppercased, rest lowercased.

```js
str.toTitleCase('hello world');    // 'Hello World'
str.toTitleCase('THE QUICK FOX');  // 'The Quick Fox'
```

#### `truncate(str, maxLength [, suffix])`
Clips to `maxLength` characters. Appends `suffix` (default `'...'`) when clipping occurs. The result is always exactly `maxLength` characters.

```js
str.truncate('Hello, World!', 8);        // 'Hello...'
str.truncate('Hello, World!', 8, '~');   // 'Hello, ~'
str.truncate('Hi', 10);                  // 'Hi'  (no clip needed)
```

#### `trim(str)`
Removes whitespace from both ends.

```js
str.trim('  hello  ');   // 'hello'
str.trim('\t hi \n');    // 'hi'
```

#### `trimStart(str)`
Removes leading whitespace only.

```js
str.trimStart('  hello  ');  // 'hello  '
```

#### `trimEnd(str)`
Removes trailing whitespace only.

```js
str.trimEnd('  hello  ');  // '  hello'
```

#### `reverseString(str)`
Returns the string with characters in reversed order.

```js
str.reverseString('hello');  // 'olleh'
str.reverseString('madam');  // 'madam'
```

#### `repeat(str, n)`
Returns `str` repeated `n` times.

```js
str.repeat('ha', 3);   // 'hahaha'
str.repeat('*', 5);    // '*****'
str.repeat('abc', 0);  // ''
```

#### `stripHtml(str)`
Removes all HTML tags, returning plain text.

```js
str.stripHtml('<p>Hello <b>World</b></p>');  // 'Hello World'
str.stripHtml('<a href="/x">Link</a>');       // 'Link'
```

---

### String Inspection

#### `startsWith(str, prefix)`
`true` if `str` begins with `prefix`. Case-sensitive.

```js
str.startsWith('Hello World', 'Hello');  // true
str.startsWith('Hello World', 'World');  // false
str.startsWith('Hello World', 'hello');  // false
```

#### `endsWith(str, suffix)`
`true` if `str` ends with `suffix`. Case-sensitive.

```js
str.endsWith('Hello World', 'World');  // true
str.endsWith('Hello World', 'Hello');  // false
```

#### `contains(str, substr)`
`true` if `substr` appears anywhere in `str`. Case-sensitive.

```js
str.contains('Hello World', 'World');  // true
str.contains('Hello World', 'xyz');    // false
```

#### `countWords(str)`
Returns the number of words. Handles multiple spaces and leading/trailing whitespace.

```js
str.countWords('Hello World');         // 2
str.countWords('  extra   spaces  ');  // 2
str.countWords('The quick brown fox'); // 4
```

#### `countOccurrences(str, substr)`
Counts non-overlapping occurrences of `substr` in `str`. Returns `0` for empty `substr`.

```js
str.countOccurrences('banana', 'an');   // 2
str.countOccurrences('aaa', 'aa');      // 1  (non-overlapping)
str.countOccurrences('hello', 'xyz');   // 0
str.countOccurrences('hello', '');      // 0
```

---

### URL Utilities

#### `objToQueryStr(obj)`
Converts a plain object to a `?key=value&...` query string.

```js
str.objToQueryStr({ page: 1, limit: 10 });  // '?page=1&limit=10'
str.objToQueryStr(null);                     // ''
```

#### `readParams(url)`
Parses query parameters from a URL into a plain key/value object.

```js
str.readParams('https://api.example.com?page=1&limit=10');
// { page: '1', limit: '10' }
```

#### `getParam(url, key)`
Returns the value of a single named query parameter.

```js
str.getParam('https://api.example.com?page=1&limit=10', 'page');   // '1'
str.getParam('https://api.example.com?page=1&limit=10', 'sort');   // undefined
```

#### `urlSearch(url)`
Returns a native [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) instance.

```js
const params = str.urlSearch('page=1&sort=asc');
params.get('page');    // '1'
params.has('sort');    // true
params.set('page', '2');
params.toString();     // 'page=2&sort=asc'
```

#### `encodeURI(value)`
Encodes a URI using the native `encodeURI`.

```js
str.encodeURI('https://example.com/search?q=hello world');
// 'https://example.com/search?q=hello%20world'
```

#### `decodeURI(value)`
Decodes an encoded URI using the native `decodeURI`.

```js
str.decodeURI('https://example.com/search?q=hello%20world');
// 'https://example.com/search?q=hello world'
```

---

## All Functions at a Glance

| Function | Category | Returns |
|---|---|---|
| `isValid(v)` | Validation | `true` / throws |
| `isNil(v)` | Nil check | `boolean` |
| `isNotNil(v)` | Nil check | `boolean` |
| `isNull(v)` | Null check | `boolean` |
| `isNotNull(v)` | Null check | `boolean` |
| `isObject(v)` | Type | `boolean` |
| `isString(v)` | Type | `boolean` |
| `isNotEmpty(v)` | Type | `boolean` |
| `isNotEmptyString(v)` | Type | `boolean` |
| `isNotNilOrEmptyString(v)` | Type | `boolean` |
| `isNumber(v)` | Type | `boolean` |
| `isNotNumber(v)` | Type | `boolean` |
| `hasProperty(obj, key)` | Object | `boolean` |
| `isPalindrome(v)` | Inspection | `boolean` |
| `capitalize(str)` | Transform | `string` |
| `toTitleCase(str)` | Transform | `string` |
| `truncate(str, max, suffix?)` | Transform | `string` |
| `trim(str)` | Transform | `string` |
| `trimStart(str)` | Transform | `string` |
| `trimEnd(str)` | Transform | `string` |
| `reverseString(str)` | Transform | `string` |
| `repeat(str, n)` | Transform | `string` |
| `stripHtml(str)` | Transform | `string` |
| `startsWith(str, prefix)` | Inspection | `boolean` |
| `endsWith(str, suffix)` | Inspection | `boolean` |
| `contains(str, substr)` | Inspection | `boolean` |
| `countWords(str)` | Inspection | `number` |
| `countOccurrences(str, substr)` | Inspection | `number` |
| `objToQueryStr(obj)` | URL | `string` |
| `readParams(url)` | URL | `object` |
| `getParam(url, key)` | URL | `string` |
| `urlSearch(url)` | URL | `URLSearchParams` |
| `encodeURI(val)` | URL | `string` |
| `decodeURI(val)` | URL | `string` |

---

## Links

- [npm package](https://www.npmjs.com/package/js_str_utils)
- [GitHub repository](https://github.com/kedarvijaykulkarni/string-utils)
- [Changelog](https://github.com/kedarvijaykulkarni/string-utils/blob/main/CHANGELOG.md)
- [Report a bug](https://github.com/kedarvijaykulkarni/string-utils/issues)

---

*Maintained by [Kedar Vijay Kulkarni](https://github.com/kedarvijaykulkarni) · ISC License*
