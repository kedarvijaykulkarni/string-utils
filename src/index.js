module.exports = {
  /**
   * Return array of [null, undefined] for compare internally
   * @returns {[]]} [null, undefined]
   */
  nullUndefined() {
    return [null, undefined];
  },
  /**
   * Given value is valid or not
   * @param {*} val
   * @returns {boolean} true/false
   */
  isValid(input) {
    if (!input && typeof input !== "number") throw new Error("Please provided a valid input!");
    return true;
  },

  /**
   * Given is null and undefined
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNil(val) {
    if (this.nullUndefined().includes(val) || this.isValid(val))
      return this.nullUndefined().includes(val);
  },

  /**
   * Given is null
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNull(val) {
    if ([null].includes(val) || this.isValid(val)) return val === null;
  },

  /**
   * Given is not null or undefined.
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNotNil(val) {
    if (this.isValid(val)) return !this.isNil(val);
  },

  /**
   * Given is not null
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNotNull(val) {
    if (this.nullUndefined().includes(val)) return false;
    if (this.isValid(val)) return !this.isNull(val);
  },

  /**
   * Given is object or not
   * @param {*} val
   * @returns {boolean} true/false
   */
  isObject(val) {
    if (val === null) return true;
    if ([undefined, ""].includes(val)) return false;
    if (this.isValid(val))
      return typeof val === "object" && this.isNotNull(val);
  },

  /**
   *
   * @param {*} obj
   * @returns {string} url
   */
  objToQueryStr(obj) {
    return this.isNotNil(obj) && this.isObject(obj)
      ? "?" +
          Object.keys(obj)
            .map((key) => key + "=" + obj[key])
            .join("&")
      : "";
  },

  /**
   * @param {string} str
   * @returns {Array} array of strings
   */
  readParams(url) {
    const params = {};
    if (this.isValid(url)) {
      const query =
        url.indexOf("?") > 0
          ? url.split("?")[1]
          : url.indexOf("&") > 0
          ? url
          : false;

      if (query) {
        query.split("&").forEach((part) => {
          const item = part.split("=");
          params[item[0]] = item[1];
        });
      }
    }
    return params;
  },

  /**
   *
   * @param {*} url
   * @param {*} key
   * @returns {string} value
   */
  getParam(url, key) {
    const params = this.readParams(url);
    return this.isValid(key) ? params[key] : "";
  },

  /**
   * @param {*} url
   * @returns {object} object of set of functions
   * @description functions are:
   * .append(key, value) - append param to url
   * .get(key) - returns value
   * .getAll(key) - returns array
   * .has(key) - returns true if param exists
   * .set(key, value) - set param to value
   * .delete(key) - delete param
   * .toString() - returns url
   */
  urlSearch(url) {
    if (this.isValid(url)) return new URLSearchParams(url);
  },

  /**
   * @param {*} val
   * @returns {boolean}
   */
  isString(val) {
    if (this.isValid(val)) return typeof val === "string";
  },

  /**
   * Given is not empty
   * @param {*} val
   * @returns {boolean}
   */
  isNotEmpty(val) {
    if (this.isValid(val)) return this.isNotNil(val) && val.length > 0;
  },

  /**
   * Given string is empty
   * @param {*} val
   * @returns {boolean}
   */
  isNotEmptyString(val) {
    if (this.isValid(val)) return this.isString(val) && val.length > 0;
  },

  /**
   * Given string is not null and not undefined, returns true if it is a string.
   * @param {*} val
   * @returns
   */
  isNotNilOrEmptyString(val) {
    return this.isNotNil(val) && this.isNotEmptyString(val);
  },

  /**
   * Given string is number
   * @param {*} val
   * @returns {boolean}
   */
  isNumber(val) {
    if ([null, undefined, ""].includes(val)) return false;
    if (this.isValid(val)) return typeof val === "number";
  },

  /**
   * Given string is not a number
   * @param {*} val
   * @returns {boolean}
   */
  isNotNumber(val) {
    if (this.isValid(val)) return !this.isNumber(val);
  },

  /**
   * Given object has given key
   * @param {*} obj
   * @param {*} key
   * @returns {boolean}
   */
  hasProperty(obj, key) {
    if (this.isObject(obj) && this.isValid(key))
      return Object.prototype.hasOwnProperty.call(obj, key);
  },

  /**
   * Given string is palindrome or not
   * @param {*} val
   * @returns {boolean}
   */
  isPalindrome(val) {
    if (this.isValid(val) && !this.isObject(val)) {
      if (this.isNumber(val)) val = String(val);
      return val == val.split("").reverse().join("");
    }
    return false;
  },

  /**
   * Encodes URI
   * @param {*} url
   * @returns {string}
   */
  encodeURI(val) {
    if (this.isValid(val)) return encodeURI(val);
  },

  /**
   * Decode URI
   * @param {*} url
   * @returns {string}
   */
  decodeURI(val) {
    if (this.isValid(val)) return decodeURI(val);
  },

  // ─── New Helper Functions ────────────────────────────────────────────────────

  /**
   * Capitalizes the first character of a string
   * @param {string} str
   * @returns {string}
   */
  capitalize(str) {
    if (this.isValid(str) && this.isString(str))
      return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * Converts a string to Title Case
   * @param {string} str
   * @returns {string}
   */
  toTitleCase(str) {
    if (this.isValid(str) && this.isString(str))
      return str.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
  },

  /**
   * Truncates a string to maxLength, appending suffix if truncated
   * @param {string} str
   * @param {number} maxLength
   * @param {string} [suffix='...']
   * @returns {string}
   */
  truncate(str, maxLength, suffix = "...") {
    if (this.isValid(str) && this.isString(str) && this.isNumber(maxLength)) {
      if (str.length <= maxLength) return str;
      return str.slice(0, maxLength - suffix.length) + suffix;
    }
  },

  /**
   * Trims whitespace from both ends of a string
   * @param {string} str
   * @returns {string}
   */
  trim(str) {
    if (this.isValid(str) && this.isString(str)) return str.trim();
  },

  /**
   * Trims whitespace from the start of a string
   * @param {string} str
   * @returns {string}
   */
  trimStart(str) {
    if (this.isValid(str) && this.isString(str)) return str.trimStart();
  },

  /**
   * Trims whitespace from the end of a string
   * @param {string} str
   * @returns {string}
   */
  trimEnd(str) {
    if (this.isValid(str) && this.isString(str)) return str.trimEnd();
  },

  /**
   * Checks whether a string starts with the given prefix
   * @param {string} str
   * @param {string} prefix
   * @returns {boolean}
   */
  startsWith(str, prefix) {
    if (this.isValid(str) && this.isString(str) && this.isValid(prefix))
      return str.startsWith(prefix);
  },

  /**
   * Checks whether a string ends with the given suffix
   * @param {string} str
   * @param {string} suffix
   * @returns {boolean}
   */
  endsWith(str, suffix) {
    if (this.isValid(str) && this.isString(str) && this.isValid(suffix))
      return str.endsWith(suffix);
  },

  /**
   * Checks whether a string contains the given substring
   * @param {string} str
   * @param {string} substr
   * @returns {boolean}
   */
  contains(str, substr) {
    if (this.isValid(str) && this.isString(str) && this.isValid(substr))
      return str.includes(substr);
  },

  /**
   * Counts the number of words in a string
   * @param {string} str
   * @returns {number}
   */
  countWords(str) {
    if (this.isValid(str) && this.isString(str))
      return str.trim().split(/\s+/).filter((w) => w.length > 0).length;
  },

  /**
   * Reverses a string
   * @param {string} str
   * @returns {string}
   */
  reverseString(str) {
    if (this.isValid(str) && this.isString(str))
      return str.split("").reverse().join("");
  },

  /**
   * Counts non-overlapping occurrences of substr within str
   * @param {string} str
   * @param {string} substr
   * @returns {number}
   */
  countOccurrences(str, substr) {
    if (this.isValid(str) && this.isString(str)) {
      if (substr === "" || this.nullUndefined().includes(substr)) return 0;
      if (this.isString(substr)) {
        let count = 0;
        let index = 0;
        while ((index = str.indexOf(substr, index)) !== -1) {
          count++;
          index += substr.length;
        }
        return count;
      }
    }
  },

  /**
   * Strips HTML tags from a string
   * @param {string} str
   * @returns {string}
   */
  stripHtml(str) {
    if (this.isValid(str) && this.isString(str))
      return str.replace(/<[^>]*>/g, "");
  },

  /**
   * Repeats a string n times
   * @param {string} str
   * @param {number} n
   * @returns {string}
   */
  repeat(str, n) {
    if (this.isValid(str) && this.isString(str) && this.isNumber(n))
      return str.repeat(n);
  },
};
