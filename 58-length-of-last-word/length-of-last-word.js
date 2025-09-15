/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let n = s.length - 1

    while (s[n] === ' ') {
        n--;
    }

    let count = 0;
    while (n >= 0 && s[n] !== ' ') {
        count++;
        n--;
    }
    return count;
};