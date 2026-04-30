# Developer Guide: js_str_utils

This guide covers everything you need to know to contribute to, test, and extend the **js_str_utils** library. Follow these conventions to keep the codebase consistent and maintainable.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Setup](#setup)
3. [API Reference](#api-reference)
4. [Writing Tests](#writing-tests)
5. [Adding a New Function](#adding-a-new-function)
6. [Best Practices](#best-practices)
7. [Contributing](#contributing)

---

## Project Structure

```
string-utils/
├── src/
│   └── index.js          # All exported utility functions
├── test/
│   └── *.spec.js         # One spec file per function
├── lib/                  # Babel-compiled output (generated, do not edit)
├── docs/
│   ├── README.md         # Extended API documentation
│   └── styleguide.md     # Writing style guidelines
├── DEVELOPER_GUIDE.md    # This file
├── USER_MANUAL.md        # End-user function reference
├── README.md             # Package overview and quick-start
└── package.json
```

---

## Setup

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Build (transpile to lib/ via Babel)
npm run build
```

Node.js **>=18.0.0** is required.

---

## API Reference

### Type-checking and validation

| Function | Signature | Returns |
|---|---|---|
| `isValid` | `(input)` | `true` or throws |
| `isNil` | `(val)` | `boolean` |
| `isNull` | `(val)` | `boolean` |
| `isNotNil` | `(val)` | `boolean` |
| `isNotNull` | `(val)` | `boolean` |
| `isObject` | `(val)` | `boolean` |
| `isString` | `(val)` | `boolean` |
| `isNotEmpty` | `(val)` | `boolean` |
| `isNotEmptyString` | `(val)` | `boolean` |
| `isNotNilOrEmptyString` | `(val)` | `boolean` |
| `isNumber` | `(val)` | `boolean` |
| `isNotNumber` | `(val)` | `boolean` |
| `hasProperty` | `(obj, key)` | `boolean` |
| `isPalindrome` | `(val)` | `boolean` |

### String transformation

| Function | Signature | Returns |
|---|---|---|
| `capitalize` | `(str)` | `string` — first letter uppercased |
| `toTitleCase` | `(str)` | `string` — each word capitalized |
| `truncate` | `(str, maxLength, suffix?)` | `string` — capped at `maxLength` |
| `trim` | `(str)` | `string` — both ends stripped |
| `trimStart` | `(str)` | `string` — leading whitespace removed |
| `trimEnd` | `(str)` | `string` — trailing whitespace removed |
| `reverseString` | `(str)` | `string` — characters reversed |
| `repeat` | `(str, n)` | `string` — repeated `n` times |
| `stripHtml` | `(str)` | `string` — HTML tags removed |

### String inspection

| Function | Signature | Returns |
|---|---|---|
| `startsWith` | `(str, prefix)` | `boolean` |
| `endsWith` | `(str, suffix)` | `boolean` |
| `contains` | `(str, substr)` | `boolean` |
| `countWords` | `(str)` | `number` |
| `countOccurrences` | `(str, substr)` | `number` |

### URL utilities

| Function | Signature | Returns |
|---|---|---|
| `objToQueryStr` | `(obj)` | `string` — `?key=val&...` |
| `readParams` | `(url)` | `object` — key/value map |
| `getParam` | `(url, key)` | `string` |
| `urlSearch` | `(url)` | `URLSearchParams` |
| `encodeURI` | `(val)` | `string` |
| `decodeURI` | `(val)` | `string` |

---

## Writing Tests

- One spec file per function, named `test/<functionName>.spec.js`.
- Use [Mocha](https://mochajs.org/) as the test runner and [Chai](https://www.chaijs.com/) for assertions.
- Standard imports at the top of every spec file:

```js
const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");
```

### Mandatory test cases for every function

1. **Empty string** — must throw `"Please provided a valid input!"`
2. **`null`** — must throw `"Please provided a valid input!"`
3. **`undefined`** — must throw `"Please provided a valid input!"`
4. **Happy path** — at least one passing case
5. **Negative / edge case** — at least one failing / boundary case

### Asserting errors

```js
it("should throw for empty string", function () {
  const throwingFunction = () => { stringapi.capitalize(""); };
  expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
});
```

### Asserting values

```js
it("should capitalize the first letter", function () {
  assert.equal(stringapi.capitalize("hello"), "Hello");
});
```

### Full example spec file

```js
const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("capitalize", function () {
  it("should throw for empty string", function () {
    const throwingFunction = () => { stringapi.capitalize(""); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw for null", function () {
    const throwingFunction = () => { stringapi.capitalize(null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw for undefined", function () {
    const throwingFunction = () => { stringapi.capitalize(undefined); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should capitalize the first letter of a lowercase string", function () {
    assert.equal(stringapi.capitalize("hello"), "Hello");
  });

  it("should handle an already-capitalized string", function () {
    assert.equal(stringapi.capitalize("Hello"), "Hello");
  });

  it("should return undefined for a number input", function () {
    assert.isUndefined(stringapi.capitalize(123));
  });
});
```

---

## Adding a New Function

Follow these four steps every time:

1. **Implement** in `src/index.js`:
   - Always call `this.isValid(val)` first to enforce the standard error contract.
   - Use `this.isString(val)` or `this.isNumber(val)` to guard type-specific logic.
   - Keep functions pure — no side effects, no mutations of inputs.

   ```js
   // Example skeleton
   myNewFunction(str) {
     if (this.isValid(str) && this.isString(str))
       return /* result */;
   },
   ```

2. **Test** in `test/myNewFunction.spec.js`:
   - Cover all mandatory cases (see above).
   - Run `npm test` and confirm 0 failures.

3. **Document** in `USER_MANUAL.md`:
   - Add an entry under the appropriate section with a description, parameters, return value, and a short example.

4. **Update** `README.md` if the function significantly changes the library's feature set.

---

## Best Practices

- **Pure functions only** — no side effects, no global state.
- **Validate at the boundary** — always call `isValid()` first; downstream callers rely on the thrown error.
- **No comments for obvious code** — add a comment only when the *why* is non-obvious (a subtle constraint, a JS quirk).
- **One spec file per function** — keeps test output readable and failures easy to locate.
- **Descriptive `it()` strings** — `"should return true when string starts with the given prefix"` beats `"test 4"`.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-function`.
3. Implement and test your changes (all 185+ tests must pass).
4. Open a pull request against `main` with a clear description of what was added and why.

Report bugs or request features at [GitHub Issues](https://github.com/kedarvijaykulkarni/string-utils/issues).
