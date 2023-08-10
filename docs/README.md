
## Usage

```js
  const stringApi = require('js_str_utils');
```

<details>

<summary> method stringApi.isString(val) </summary>

### isString(val)

```javascript
    stringApi.isString(val)
    // where val and expected output as below
```

| val  | Output |
| ------------- | ------------- |
| `""` (an empty string)  | `Error: Please provided a valid input!` |
| `null` | `Error: Please provided a valid input!` |
| `undefined` | `Error: Please provided a valid input!` |
| `"JavaScript"` (a string)  | `true` |
| `"1234"` (a string)  | `true` |
| `1234` (a number)  | `false` |
| `true` (a boolean)  | `false` |
| `{}` (a Object)  | `false` |
| `[]` (an array)  | `false` |

</details>

<details>

<summary> method stringApi.isPalindrome(val) </summary>

### isPalindrome(val)

```javascript
    stringApi.isPalindrome(val)
    // where val and expected output as below
```

| val  | Output |
| ------------- | ------------- |
| `""` (an empty string)  | `Error: Please provided a valid input!` |
| `null` | `Error: Please provided a valid input!` |
| `undefined` | `Error: Please provided a valid input!` |
| `"JavaScript"` (a string)  | `false` |
| `"madam"` (a string)  | `true` |
| `121` (a number)  | `true` |
| `1214` (a number)  | `false` |
| `true` (a boolean)  | `false` |
| `{}` (a Object)  | `false` |
| `[]` (an array)  | `false` |

</details>