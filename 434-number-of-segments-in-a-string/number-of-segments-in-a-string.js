/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    // return s.split(' ').length;
    s = s.trim()
    if(s === '') return 0;
    
    let i = 0;
    let j = 0;
    let count = 1;
    while(j < s.length) {
        if(s[j] === ' ' && s[j+1] !== ' ') {
            count++
            i = j + 1
        }
        j++;
    }
    return count;
};