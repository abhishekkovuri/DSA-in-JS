/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split('');

    for (let i = 0; i < s.length; i = i + 2 * k) {
        const halfLen = Math.floor(k / 2)

        for (let j = 0; j < halfLen; j++) {
            [s[i + j], s[k + i - 1 - j]] = [s[k + i - 1 - j], s[i + j]]
        }
    }
    return s.join('');
};