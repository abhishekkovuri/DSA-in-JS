/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(p, s) {
    const pM = new Map()
    const sM = new Map()
    s = s.split(' ')
    if (p.length !== s.length) return false
    for(let i = 0; i < p.length; i++) {
        if(!pM.has(p[i]) && !sM.has(s[i])) {
            pM.set(p[i], s[i])
            sM.set(s[i], p[i])
        } else if(pM.get(p[i]) !== s[i] || sM.get(s[i]) !== p[i]) {
            return false
        }
    }
    return true;
};