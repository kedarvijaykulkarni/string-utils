module.exports = {
  /**
   * Given value is valid or not
   * @param {*} val
   * @returns {boolean} true/false
   */
  isValid(input) {
    if (!input) throw new Error("Please provided a valid input!");
    return true;
  },

  /**
   * Given is null and undefined
   * @param {*} val
   * @returns {boolean} true/false
   */
  isNil(val) {
    if ([null, undefined].includes(val) || this.isValid(val))
      return [null, undefined].includes(val);
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
    if (this.isValid(val)) return !this.isNull(val);
  },

  /**
   * Given is object or not
   * @param {*} val
   * @returns {boolean} true/false
   */
  isObject(val) {
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
    if (this.isObject(val) && this.isValid(key))
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
};
