/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(h, n) {
    // return h.indexOf(n);
    
    // sliding window
    let hl = h.length;
    let nl = n.length;

    for(let i = 0; i <= hl - nl; i++) {
        let j = 0;
        for(j = 0; j < nl; j++) {
            if(h[i + j] !== n[j]) {
                break;
            }
        }
        if(j === nl) return i;
    }
    return -1;
};