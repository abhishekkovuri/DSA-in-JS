/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase()
    let filteredString = reverseString = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filteredString += s[i]
            reverseString = s[i] + reverseString;
        }
    }
    return reverseString === filteredString;
};