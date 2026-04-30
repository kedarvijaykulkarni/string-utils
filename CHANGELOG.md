# Changelog

All notable changes to **js_str_utils** are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- `capitalize(str)` — uppercases the first character of a string
- `toTitleCase(str)` — converts every word to Title Case
- `truncate(str, maxLength, suffix?)` — clips string to a maximum length with a configurable suffix
- `trim(str)` — removes whitespace from both ends
- `trimStart(str)` — removes leading whitespace
- `trimEnd(str)` — removes trailing whitespace
- `startsWith(str, prefix)` — boolean prefix check
- `endsWith(str, suffix)` — boolean suffix check
- `contains(str, substr)` — boolean substring search
- `countWords(str)` — returns the number of words in a string
- `reverseString(str)` — reverses the characters in a string
- `countOccurrences(str, substr)` — counts non-overlapping occurrences of a substring
- `stripHtml(str)` — removes all HTML tags from a string
- `repeat(str, n)` — repeats a string `n` times
- 13 new test spec files covering all new functions (185 tests total, up from 59)
- `overrides.serialize-javascript` pinned to `7.0.5` in `package.json` to eliminate transitive vulnerability

### Fixed
- `hasProperty(obj, key)` — corrected a bug where the internal call used an undeclared `val` variable instead of the `obj` parameter, causing a `ReferenceError` at runtime
- Resolved 3 npm audit vulnerabilities: 2 high (`serialize-javascript` RCE and CPU exhaustion) and 1 low (`diff` DoS) by updating `mocha` to `11.3.0` and overriding `serialize-javascript` to `7.0.5`

### Changed
- `engines.node` updated from `>=12.22.12` to `>=18.0.0` (Node 12 has been EOL since April 2022)
- `package.json` description expanded to better reflect the full scope of the library
- `package.json` keywords expanded from 4 to 14 entries for improved npm discoverability
- `DEVELOPER_GUIDE.md` fully rewritten: added full API reference table, mandatory test-case checklist, step-by-step "Adding a New Function" guide, and a working example spec
- `README.md` fully rewritten to npm documentation standards with per-method examples for all 33 functions
- `USER_MANUAL.md` updated to cover all 33 functions including all new helpers

---

## [1.4.7] — 2024-08-10

### Changed
- Enhanced `README.md` with expanded usage examples and API details

---

## [1.4.2] — 2023-10-12

### Fixed
- CI/CD pipeline corrections for npm publish workflow

---

## [1.4.1] — 2023-09-18

### Fixed
- Node.js engine version corrected in `package.json`

---

## [1.4.0] — 2023-08-10

### Changed
- Updated `engines.node` to reflect minimum supported Node.js version

### Fixed
- Resolved npm audit vulnerabilities in transitive dependencies

---

## [1.3.0] — 2023-06-26

### Added
- `readParams(url)` — parses URL query string into a key/value object
- `getParam(url, key)` — retrieves a single query parameter value
- `urlSearch(url)` — returns a native `URLSearchParams` instance
- `encodeURI(val)` — wraps native URI encoding
- `decodeURI(val)` — wraps native URI decoding
- `objToQueryStr(obj)` — converts a plain object to a `?key=value` query string
- `isNotEmpty(val)` — checks if a value has `length > 0`
- `isNotEmptyString(val)` — checks if a value is a non-empty string
- `isNotNilOrEmptyString(val)` — combined nil and empty-string guard
- `isNotNumber(val)` — negated number check

---

## [1.2.0] — 2022-06-26

### Added
- `hasProperty(obj, key)` — checks own property existence using `Object.prototype.hasOwnProperty`
- `isObject(val)` — type check for object values
- `isNotNull(val)` — negated null check
- `isNotNil(val)` — negated nil check

---

## [1.1.0] — 2022-02-08

### Added
- `isPalindrome(val)` — checks whether a string or number is a palindrome

---

## [1.0.0] — 2022-01-01

### Added
- Initial public release
- `isValid(input)` — validates input, throws on `null`, `undefined`, or empty string
- `isNil(val)` — checks for `null` or `undefined`
- `isNull(val)` — checks for exactly `null`
- `isString(val)` — type check for string values
- `isNumber(val)` — type check for number values
- `nullUndefined()` — internal helper returning `[null, undefined]`

---

[Unreleased]: https://github.com/kedarvijaykulkarni/string-utils/compare/v1.4.7...HEAD
[1.4.7]: https://github.com/kedarvijaykulkarni/string-utils/compare/v1.4.2...v1.4.7
[1.4.2]: https://github.com/kedarvijaykulkarni/string-utils/compare/v1.4.0...v1.4.2
[1.4.1]: https://github.com/kedarvijaykulkarni/string-utils/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/kedarvijaykulkarni/string-utils/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/kedarvijaykulkarni/string-utils/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/kedarvijaykulkarni/string-utils/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/kedarvijaykulkarni/string-utils/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/kedarvijaykulkarni/string-utils/releases/tag/v1.0.0
