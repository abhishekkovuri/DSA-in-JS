/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let R = L = count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            R++;
        } else {
            L++;
        }

        if (R === L) {
            count++;
            R = L = 0;
        }
    }

    return count;
};