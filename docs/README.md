# 🔤 string-utils

A lightweight JavaScript utility library for common **string validation and inspection** tasks.  
Built with simplicity in mind and zero external dependencies.

---

## ✨ Features

- ✅ Validate whether a value is a valid string
- 🔁 Check if a string or number is a palindrome
- ⚠️ Defensive input validation with meaningful error messages
- 🧩 Works in Node.js (CommonJS)

---

## 📦 Installation

```bash
npm install js_str_utils
```

---

## 🚀 Usage

```js
const stringApi = require('js_str_utils');
```

---

## 📘 API Reference

---

### `stringApi.isString(value)`

Checks whether the provided value is a **non-empty string**.

#### Syntax
```js
stringApi.isString(value)
```

#### Parameters
- `value` *(any)* – Value to be validated

#### Returns
- `true` → if value is a valid string  
- `false` → if value is not a string  
- `Error` → if value is empty, null, or undefined

#### Examples

```js
stringApi.isString("JavaScript"); // true
stringApi.isString("1234");       // true
stringApi.isString(1234);         // false
```

#### Behavior Table

| Input | Output |
|------|--------|
| `""` | ❌ Error: Please provide a valid input! |
| `null` | ❌ Error: Please provide a valid input! |
| `undefined` | ❌ Error: Please provide a valid input! |
| `"JavaScript"` | `true` |
| `"1234"` | `true` |
| `1234` | `false` |
| `true` | `false` |
| `{}` | `false` |
| `[]` | `false` |

---

### `stringApi.isPalindrome(value)`

Checks whether a **string or number** is a palindrome.

A palindrome reads the same **forward and backward**.

#### Syntax
```js
stringApi.isPalindrome(value)
```

#### Parameters
- `value` *(string | number)* – Value to be checked

#### Returns
- `true` → if palindrome  
- `false` → if not a palindrome  
- `Error` → if input is empty, null, or undefined

#### Examples

```js
stringApi.isPalindrome("madam"); // true
stringApi.isPalindrome(121);     // true
stringApi.isPalindrome("hello");// false
```

#### Behavior Table

| Input | Output |
|------|--------|
| `""` | ❌ Error: Please provide a valid input! |
| `null` | ❌ Error: Please provide a valid input! |
| `undefined` | ❌ Error: Please provide a valid input! |
| `"JavaScript"` | `false` |
| `"madam"` | `true` |
| `121` | `true` |
| `1214` | `false` |
| `true` | `false` |
| `{}` | `false` |
| `[]` | `false` |

---

## 🧪 Error Handling

All methods perform strict input validation.  
Invalid inputs such as `null`, `undefined`, or empty strings will throw a **descriptive error**.

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open an issue or submit a pull request.

---

## 📄 License

MIT License © Kedar Vijay Kulkarni
