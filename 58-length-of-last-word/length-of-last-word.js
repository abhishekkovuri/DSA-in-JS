/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let n = s.length - 1

    // 2 loops
    // while (s[n] === ' ') {
    //     n--;
    // }
    // let count = 0;
    // while (n >= 0 && s[n] !== ' ') {
    //     count++;
    //     n--;
    // }

    // 1 loop 
    let count = 0
    while(n>=0) {
        if(s[n] !== ' ') {
            count++
        } else if(count > 0) {
            break;
        }
        n--;
    }
    return count;
};