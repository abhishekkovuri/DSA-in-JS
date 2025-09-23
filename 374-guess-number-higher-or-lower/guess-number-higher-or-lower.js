/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let l = 1; r = n
    while (l <= r) {
        const m = Math.floor(l + ((r - l) / 2));
        const guessPick = guess(m)
        if(guessPick === 0) {
            return m;
        } else if(guessPick === 1) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
};