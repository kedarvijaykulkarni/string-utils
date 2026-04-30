# Support

This document describes where to get help with **js_str_utils**, what belongs in a GitHub Issue, and what does not.

---

## Documentation

Before opening an issue or asking a question, please check the existing documentation:

| Resource | Description |
|---|---|
| [README.md](../README.md) | Installation, quick start, and full API reference |
| [USER_MANUAL.md](../USER_MANUAL.md) | Detailed examples and edge-case behavior for every function |
| [DEVELOPER_GUIDE.md](../DEVELOPER_GUIDE.md) | Contributing, testing conventions, and how to add new functions |
| [CHANGELOG.md](../CHANGELOG.md) | Full version history and list of changes per release |
| [npm package page](https://www.npmjs.com/package/js_str_utils) | Latest published version, download stats |

---

## How to Get Help

### Ask a question

If the documentation does not answer your question, open a **GitHub Discussion** or file an issue with the `question` label:

- [Open a Question](https://github.com/kedarvijaykulkarni/string-utils/issues/new?labels=question&template=issue-report.md)

Please include:
- The version of `js_str_utils` you are using (`npm list js_str_utils`)
- Your Node.js version (`node --version`)
- A minimal code snippet that shows what you tried and what you expected

### Report a bug

If you have found a bug — incorrect return value, unexpected error, or behavior that contradicts the documentation — please [open a bug report](https://github.com/kedarvijaykulkarni/string-utils/issues/new?labels=bug&template=issue-report.md).

A useful bug report includes:

1. **Version** — `js_str_utils` version and Node.js version
2. **Minimal reproduction** — the smallest snippet of code that shows the problem
3. **Expected behavior** — what you expected to happen
4. **Actual behavior** — what actually happened, including any error messages or stack traces

```js
// Example of a useful reproduction
const str = require('js_str_utils');

// Expected: 'Hello'
// Actual: <what you observed>
console.log(str.capitalize('hello'));
```

### Request a feature

If you would like to see a new utility function or a change to an existing one, [open a feature request](https://github.com/kedarvijaykulkarni/string-utils/issues/new?labels=enhancement).

Please describe:
- What function or behavior you need
- A concrete use-case — what problem does it solve?
- A proposed API (function name, parameters, return value)

---

## Report a Security Vulnerability

**Do not open a public GitHub Issue for security vulnerabilities.**

Please follow the process in [SECURITY.md](../SECURITY.md) and report suspected vulnerabilities directly to:

**kedarvijaykulkarni@gmail.com**

You will receive a response within 7 days. Confirmed vulnerabilities will be patched and disclosed responsibly.

---

## What Is Out of Scope

The following are outside the scope of this project's support:

- General JavaScript or Node.js questions unrelated to `js_str_utils`
- Help with your application's architecture or business logic
- Support for Node.js versions below **18.0.0** (EOL versions are not supported)
- Requests to add functions that duplicate native JavaScript built-ins without adding clear value

---

## Contributing

If you want to fix a bug or add a feature yourself, see [CONTRIBUTING.MD](CONTRIBUTING.MD) and [DEVELOPER_GUIDE.md](../DEVELOPER_GUIDE.md). Pull requests are welcome.

---

## Code of Conduct

All interactions in this repository are governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful and constructive.

---

*Maintained by [Kedar Vijay Kulkarni](https://github.com/kedarvijaykulkarni)*
