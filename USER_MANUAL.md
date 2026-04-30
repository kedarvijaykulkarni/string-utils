# js_str_utils — User Manual

A complete reference for every function in the library, with practical examples, parameter descriptions, and expected behavior.

---

## Installation & Setup

```bash
npm install js_str_utils
```

```js
const str = require('js_str_utils');
```

---

## Global Error Contract

Every function that accepts a string argument enforces the same validation rule:

| Input | Behavior |
|---|---|
| `""` (empty string) | Throws `Error: Please provided a valid input!` |
| `null` | Throws `Error: Please provided a valid input!` |
| `undefined` | Throws `Error: Please provided a valid input!` |

Exceptions to this rule are noted per function.

---

## Contents

1. [Validation](#1-validation)
2. [Nil & Null Checks](#2-nil--null-checks)
3. [Type Checks](#3-type-checks)
4. [Object & Property Helpers](#4-object--property-helpers)
5. [String Transformation](#5-string-transformation)
6. [String Inspection](#6-string-inspection)
7. [URL Utilities](#7-url-utilities)

---

## 1. Validation

### `isValid(value)`

The foundation of the library. Returns `true` when a value can be safely used as an input — meaning it is not `null`, not `undefined`, and not an empty string. Numbers always pass validation, including `0`.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `value` | `*` | Any value to test |

**Returns** `true` or throws `Error`.

**Examples**

```js
str.isValid('hello');    // true
str.isValid(0);          // true  — numbers are always valid
str.isValid(false);      // true
str.isValid([]);         // true
str.isValid({});         // true
str.isValid('');         // throws Error
str.isValid(null);       // throws Error
str.isValid(undefined);  // throws Error
```

---

## 2. Nil & Null Checks

### `isNil(value)`

Checks whether a value is `null` or `undefined`.

**Returns** `boolean`

```js
str.isNil(null);       // true
str.isNil(undefined);  // true
str.isNil('hello');    // false
str.isNil(0);          // false
str.isNil([]);         // false
str.isNil({});         // false
str.isNil('');         // throws Error
```

---

### `isNotNil(value)`

The opposite of `isNil`. Returns `true` when the value is neither `null` nor `undefined`. Throws for `null` and `undefined`.

**Returns** `boolean`

```js
str.isNotNil('hello');    // true
str.isNotNil(0);          // true
str.isNotNil(false);      // true
str.isNotNil(null);       // throws Error
str.isNotNil(undefined);  // throws Error
```

---

### `isNull(value)`

Strictly checks for `null`. Throws for `undefined` and empty string.

**Returns** `boolean`

```js
str.isNull(null);       // true
str.isNull('hello');    // false
str.isNull(0);          // false
str.isNull(undefined);  // throws Error
str.isNull('');         // throws Error
```

---

### `isNotNull(value)`

Returns `true` when the value is not `null`. Unlike `isNull`, does **not** throw for `null` or `undefined` — returns `false` for both, making it safe for use in conditional expressions.

**Returns** `boolean`

```js
str.isNotNull('hello');    // true
str.isNotNull(0);          // true
str.isNotNull(null);       // false   — no throw
str.isNotNull(undefined);  // false   — no throw
str.isNotNull('');         // throws Error
```

---

## 3. Type Checks

### `isString(value)`

Returns `true` if the value is of type `string`.

**Returns** `boolean`

```js
str.isString('hello');    // true
str.isString('');         // throws Error
str.isString(123);        // false
str.isString(true);       // false
str.isString([]);         // false
str.isString({});         // false
str.isString(null);       // throws Error
str.isString(undefined);  // throws Error
```

---

### `isNotEmpty(value)`

Returns `true` if the value has a `length` property greater than `0`. Useful for both strings and arrays.

**Returns** `boolean`

```js
str.isNotEmpty('hello');   // true
str.isNotEmpty([1, 2]);    // true
str.isNotEmpty('a');       // true
str.isNotEmpty([]);        // false  — length is 0
str.isNotEmpty('');        // throws Error
str.isNotEmpty(null);      // throws Error
```

---

### `isNotEmptyString(value)`

Returns `true` only when the value is both a string type **and** has length greater than `0`.

**Returns** `boolean`

```js
str.isNotEmptyString('hello'); // true
str.isNotEmptyString([1, 2]);  // false — not a string
str.isNotEmptyString(123);     // false — not a string
str.isNotEmptyString('');      // throws Error
str.isNotEmptyString(null);    // throws Error
```

---

### `isNotNilOrEmptyString(value)`

Returns `true` only when the value is not `null`, not `undefined`, **and** is a non-empty string. Returns `false` otherwise — no throws for nil values.

**Returns** `boolean`

```js
str.isNotNilOrEmptyString('hello');    // true
str.isNotNilOrEmptyString(null);       // false  — no throw
str.isNotNilOrEmptyString(undefined);  // false  — no throw
str.isNotNilOrEmptyString(123);        // false  — not a string
```

---

### `isNumber(value)`

Returns `true` if the value is of type `number`. Returns `false` (without throwing) for `null`, `undefined`, and empty string.

**Returns** `boolean`

```js
str.isNumber(42);         // true
str.isNumber(0);          // true   — 0 is a valid number
str.isNumber(-3.14);      // true
str.isNumber('42');       // false  — string, not number
str.isNumber(null);       // false  — no throw
str.isNumber(undefined);  // false  — no throw
str.isNumber('');         // false  — no throw
str.isNumber({});         // false
```

---

### `isNotNumber(value)`

The opposite of `isNumber`. Returns `true` when the value is not a number type.

**Returns** `boolean`

```js
str.isNotNumber('hello');  // true
str.isNotNumber([]);       // true
str.isNotNumber(42);       // false
str.isNotNumber(0);        // false
```

---

## 4. Object & Property Helpers

### `isObject(value)`

Returns `true` if the value is of type `object`. This includes plain objects, arrays, and `null` (JavaScript's historical quirk). Returns `false` for primitives.

**Returns** `boolean`

```js
str.isObject({});          // true
str.isObject({ a: 1 });    // true
str.isObject([1, 2]);      // true
str.isObject(null);        // true   — typeof null === 'object' in JS
str.isObject('hello');     // false
str.isObject(42);          // false
str.isObject(true);        // false
str.isObject(undefined);   // false
str.isObject('');          // false
```

---

### `hasProperty(obj, key)`

Returns `true` if `obj` has `key` as an **own** property. Inherited prototype properties return `false`.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `obj` | `object` | The object to inspect |
| `key` | `string` | The property name to look up |

**Returns** `boolean`

```js
str.hasProperty({ name: 'Alice', age: 30 }, 'name');  // true
str.hasProperty({ name: 'Alice', age: 30 }, 'email'); // false
str.hasProperty({ count: 0 }, 'count');               // true — falsy value still counts

// Inherited properties are not own properties
const obj = Object.create({ inherited: true });
str.hasProperty(obj, 'inherited');  // false

// Throws for invalid key
str.hasProperty({ a: 1 }, '');      // throws Error
str.hasProperty({ a: 1 }, null);    // throws Error
```

---

### `isPalindrome(value)`

Returns `true` if the string or number reads identically forwards and backwards. Objects and arrays always return `false`.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `value` | `string \| number` | Value to test |

**Returns** `boolean`

```js
str.isPalindrome('madam');    // true
str.isPalindrome('racecar');  // true
str.isPalindrome('level');    // true
str.isPalindrome(121);        // true   — converted to '121'
str.isPalindrome(1221);       // true
str.isPalindrome('hello');    // false
str.isPalindrome(1234);       // false
str.isPalindrome({});         // false  — no throw
str.isPalindrome([]);         // false  — no throw
str.isPalindrome('');         // throws Error
str.isPalindrome(null);       // throws Error
```

---

## 5. String Transformation

### `capitalize(str)`

Uppercases the first character of a string. All other characters are left unchanged.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `str` | `string` | Input string |

**Returns** `string`

```js
str.capitalize('hello');       // 'Hello'
str.capitalize('javaScript');  // 'JavaScript'
str.capitalize('HELLO');       // 'HELLO'  — rest is unchanged
str.capitalize('a');           // 'A'
str.capitalize('');            // throws Error
str.capitalize(null);          // throws Error
str.capitalize(123);           // undefined — not a string type
```

---

### `toTitleCase(str)`

Converts a string so that each word's first character is uppercase and the remaining characters are lowercase.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `str` | `string` | Input string |

**Returns** `string`

```js
str.toTitleCase('hello world');          // 'Hello World'
str.toTitleCase('HELLO WORLD');          // 'Hello World'
str.toTitleCase('the quick brown fox');  // 'The Quick Brown Fox'
str.toTitleCase('javaScript');           // 'Javascript'
str.toTitleCase('');                     // throws Error
str.toTitleCase(null);                   // throws Error
```

---

### `truncate(str, maxLength [, suffix])`

Clips a string to at most `maxLength` characters. When the string exceeds `maxLength`, it is cut short and `suffix` is appended. The returned string is always exactly `maxLength` characters when truncation occurs.

**Parameters**

| Name | Type | Default | Description |
|---|---|---|---|
| `str` | `string` | — | The input string |
| `maxLength` | `number` | — | Maximum number of characters in the result |
| `suffix` | `string` | `'...'` | String appended to the truncated result |

**Returns** `string`

```js
str.truncate('Hello, World!', 8);           // 'Hello...'   (8 chars)
str.truncate('Hello, World!', 8, '…');      // 'Hello, …'   (8 chars)
str.truncate('Hello, World!', 8, ' [more]');// ' [more]'    (8 chars)
str.truncate('Hi', 10);                     // 'Hi'         (unchanged)
str.truncate('Exactly10!', 10);             // 'Exactly10!' (unchanged)
str.truncate('', 5);                        // throws Error
str.truncate(null, 5);                      // throws Error
```

> **Tip:** The suffix length counts towards `maxLength`, so a 3-character suffix on a 10-character max leaves 7 characters of the original string.

---

### `trim(str)`

Removes whitespace characters (spaces, tabs, newlines) from both the start and end of a string. Does not modify whitespace inside the string.

**Returns** `string`

```js
str.trim('  hello  ');    // 'hello'
str.trim('\t hello \n');  // 'hello'
str.trim('hello');        // 'hello'  — unchanged
str.trim('  ');           // throws Error (treated as empty-like by isValid)
```

---

### `trimStart(str)`

Removes whitespace from the **beginning** of a string only.

**Returns** `string`

```js
str.trimStart('  hello  ');  // 'hello  '
str.trimStart('\t hello');   // 'hello'
str.trimStart('hello  ');    // 'hello  '  — unchanged
```

---

### `trimEnd(str)`

Removes whitespace from the **end** of a string only.

**Returns** `string`

```js
str.trimEnd('  hello  ');  // '  hello'
str.trimEnd('hello \t');   // 'hello'
str.trimEnd('  hello');    // '  hello'  — unchanged
```

---

### `reverseString(str)`

Returns a new string with all characters in reversed order.

**Returns** `string`

```js
str.reverseString('hello');        // 'olleh'
str.reverseString('Hello World');  // 'dlroW olleH'
str.reverseString('madam');        // 'madam'  — palindrome stays same
str.reverseString('a');            // 'a'
str.reverseString('');             // throws Error
str.reverseString(null);           // throws Error
str.reverseString(123);            // undefined — not a string type
```

---

### `repeat(str, n)`

Returns a new string consisting of `str` concatenated `n` times. When `n` is `0`, returns an empty string.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `str` | `string` | The string to repeat |
| `n` | `number` | Number of repetitions (must be a non-negative integer) |

**Returns** `string`

```js
str.repeat('ha', 3);    // 'hahaha'
str.repeat('*', 5);     // '*****'
str.repeat('abc', 1);   // 'abc'
str.repeat('abc', 0);   // ''
str.repeat('', 3);      // throws Error
str.repeat(null, 3);    // throws Error
str.repeat('ha', '3');  // undefined — n is not a number
```

---

### `stripHtml(str)`

Removes all HTML tags from a string and returns the plain text content. Handles tags with attributes and self-closing tags.

**Returns** `string`

```js
str.stripHtml('<p>Hello World</p>');                 // 'Hello World'
str.stripHtml('<h1>Title</h1><p>Body text</p>');     // 'TitleBody text'
str.stripHtml('<a href="/path">Click here</a>');      // 'Click here'
str.stripHtml('Hello<br/>World');                    // 'HelloWorld'
str.stripHtml('No HTML here');                       // 'No HTML here'
str.stripHtml('');                                   // throws Error
str.stripHtml(null);                                 // throws Error
str.stripHtml(123);                                  // undefined — not a string type
```

> **Note:** This function uses a regex to strip tags. It is suitable for simple HTML fragments. Do not rely on it to sanitize user-generated HTML for security purposes — use a dedicated library for that.

---

## 6. String Inspection

### `startsWith(str, prefix)`

Returns `true` if `str` begins with the given `prefix`. The check is case-sensitive.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `str` | `string` | The string to check |
| `prefix` | `string` | The prefix to look for |

**Returns** `boolean`

```js
str.startsWith('Hello World', 'Hello');  // true
str.startsWith('Hello World', 'World');  // false
str.startsWith('Hello World', 'hello');  // false — case-sensitive
str.startsWith('JavaScript', 'J');       // true
str.startsWith('Hi', 'Hello');           // false — prefix longer than string
str.startsWith('', 'Hi');               // throws Error
str.startsWith(null, 'Hi');             // throws Error
```

---

### `endsWith(str, suffix)`

Returns `true` if `str` ends with the given `suffix`. The check is case-sensitive.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `str` | `string` | The string to check |
| `suffix` | `string` | The suffix to look for |

**Returns** `boolean`

```js
str.endsWith('Hello World', 'World');  // true
str.endsWith('Hello World', 'Hello');  // false
str.endsWith('Hello World', 'world');  // false — case-sensitive
str.endsWith('JavaScript', 't');       // true
str.endsWith('Hi', 'Hello World');     // false — suffix longer than string
str.endsWith('', 'hi');               // throws Error
str.endsWith(null, 'hi');             // throws Error
```

---

### `contains(str, substr)`

Returns `true` if `substr` appears anywhere within `str`. The check is case-sensitive.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `str` | `string` | The string to search in |
| `substr` | `string` | The substring to search for |

**Returns** `boolean`

```js
str.contains('Hello World', 'World');   // true
str.contains('Hello World', 'llo');     // true
str.contains('Hello World', 'xyz');     // false
str.contains('Hello World', 'world');   // false — case-sensitive
str.contains('JavaScript', 'Script');   // true
str.contains('', 'hi');                // throws Error
str.contains(null, 'hi');              // throws Error
```

---

### `countWords(str)`

Returns the number of words in a string. Words are separated by one or more whitespace characters (spaces, tabs, newlines). Leading and trailing whitespace is ignored.

**Returns** `number`

```js
str.countWords('Hello World');              // 2
str.countWords('The quick brown fox');      // 4
str.countWords('  extra   spaces  ');       // 2  — extra spaces ignored
str.countWords('JavaScript');               // 1
str.countWords('line1\nline2\nline3');      // 3
str.countWords('');                         // throws Error
str.countWords(null);                       // throws Error
str.countWords(123);                        // undefined — not a string type
```

---

### `countOccurrences(str, substr)`

Returns the number of **non-overlapping** occurrences of `substr` within `str`. Returns `0` for an empty `substr` without throwing.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `str` | `string` | The string to search in |
| `substr` | `string` | The substring to count |

**Returns** `number`

```js
str.countOccurrences('banana', 'an');          // 2
str.countOccurrences('hello world', 'world');  // 1
str.countOccurrences('hello', 'xyz');          // 0
str.countOccurrences('aaaa', 'aa');            // 2  — non-overlapping
str.countOccurrences('aaa', 'aa');             // 1  — non-overlapping
str.countOccurrences('Hello hello', 'hello');  // 1  — case-sensitive
str.countOccurrences('hello', '');             // 0  — empty substr returns 0
str.countOccurrences('', 'a');                // throws Error
str.countOccurrences(null, 'a');              // throws Error
```

---

## 7. URL Utilities

### `objToQueryStr(obj)`

Converts a plain JavaScript object into a URL query string prefixed with `?`. Returns an empty string `''` for `null`, `undefined`, or non-object inputs.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `obj` | `object` | Plain key/value object |

**Returns** `string`

```js
str.objToQueryStr({ page: 1, limit: 10 });      // '?page=1&limit=10'
str.objToQueryStr({ q: 'hello world' });         // '?q=hello world'
str.objToQueryStr({ a: 'x', b: 'y', c: 'z' });  // '?a=x&b=y&c=z'
str.objToQueryStr(null);                         // ''
str.objToQueryStr(undefined);                    // ''
str.objToQueryStr('not an object');              // ''
```

---

### `readParams(url)`

Parses a URL string and returns all query parameters as a plain key/value object. Values are always strings. Supports both full URLs (with `?`) and bare query strings (with `&`).

**Parameters**

| Name | Type | Description |
|---|---|---|
| `url` | `string` | Full URL or bare query string |

**Returns** `object`

```js
str.readParams('https://api.example.com/users?page=1&limit=10');
// { page: '1', limit: '10' }

str.readParams('page=2&sort=asc&filter=active');
// { page: '2', sort: 'asc', filter: 'active' }

str.readParams('https://example.com/path');
// {}  — no query parameters

str.readParams('');    // throws Error
str.readParams(null);  // throws Error
```

---

### `getParam(url, key)`

Returns the value of a single named query parameter from a URL string. Returns `undefined` if the key does not exist.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `url` | `string` | Full URL or bare query string |
| `key` | `string` | Parameter name to retrieve |

**Returns** `string | undefined`

```js
str.getParam('https://api.example.com?page=1&limit=10', 'page');   // '1'
str.getParam('https://api.example.com?page=1&limit=10', 'limit');  // '10'
str.getParam('https://api.example.com?page=1&limit=10', 'sort');   // undefined
str.getParam('', 'page');   // throws Error
str.getParam(null, 'page'); // throws Error
```

---

### `urlSearch(url)`

Returns a native [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) instance from a URL or query string, giving full access to the Web API for query manipulation.

**Parameters**

| Name | Type | Description |
|---|---|---|
| `url` | `string` | Full URL or bare query string |

**Returns** `URLSearchParams`

**Available methods on the returned object:**

| Method | Description |
|---|---|
| `.get(key)` | Returns the first value for `key`, or `null` |
| `.getAll(key)` | Returns all values for `key` as an array |
| `.has(key)` | Returns `true` if `key` exists |
| `.set(key, value)` | Sets `key` to `value`, replacing existing values |
| `.append(key, value)` | Adds a new `key`/`value` pair without removing existing ones |
| `.delete(key)` | Removes all entries with `key` |
| `.toString()` | Serializes back to a query string |

```js
const params = str.urlSearch('page=1&sort=asc&sort=desc');

params.get('page');        // '1'
params.getAll('sort');     // ['asc', 'desc']
params.has('page');        // true
params.has('filter');      // false

params.set('page', '2');
params.toString();         // 'page=2&sort=asc&sort=desc'

params.append('filter', 'active');
params.toString();         // 'page=2&sort=asc&sort=desc&filter=active'

params.delete('sort');
params.toString();         // 'page=2&filter=active'

str.urlSearch('');         // throws Error
str.urlSearch(null);       // throws Error
```

---

### `encodeURI(value)`

Encodes a URI by replacing unsafe characters with percent-encoded equivalents. Wraps the native [`encodeURI`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) function.

> Characters **not** encoded: `A–Z a–z 0–9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #`

**Returns** `string`

```js
str.encodeURI('https://example.com/search?q=hello world');
// 'https://example.com/search?q=hello%20world'

str.encodeURI('https://example.com/path/über');
// 'https://example.com/path/%C3%BCber'

str.encodeURI('');    // throws Error
str.encodeURI(null);  // throws Error
```

---

### `decodeURI(value)`

Decodes a previously encoded URI string back to its original, human-readable form. Wraps the native [`decodeURI`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI) function.

**Returns** `string`

```js
str.decodeURI('https://example.com/search?q=hello%20world');
// 'https://example.com/search?q=hello world'

str.decodeURI('https://example.com/path/%C3%BCber');
// 'https://example.com/path/über'

str.decodeURI('');    // throws Error
str.decodeURI(null);  // throws Error
```

---

## Error Handling in Practice

Use a `try/catch` block when input validity is uncertain:

```js
function safeCapitalize(input) {
  try {
    return str.capitalize(input);
  } catch (e) {
    return '';  // fallback for null / undefined / empty string
  }
}

safeCapitalize('hello');  // 'Hello'
safeCapitalize(null);     // ''
safeCapitalize('');       // ''
```

Or validate first using `isValid`:

```js
function processInput(input) {
  try {
    str.isValid(input);
  } catch (e) {
    throw new TypeError(`processInput: expected a non-empty string, got ${JSON.stringify(input)}`);
  }
  return str.capitalize(str.trim(input));
}
```

---

For contribution guidelines see [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md).  
For a full version history see [CHANGELOG.md](./CHANGELOG.md).
