/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const hashMapST = {}
    const hashMapTS = {}
    for (let i = 0; i < t.length; i++) {
        if (!hashMapST[s[i]] && !hashMapTS[t[i]]) {
            hashMapST[s[i]] = t[i]
            hashMapTS[t[i]] = s[i]
        } else if (hashMapTS[t[i]] !== s[i] || hashMapST[s[i]] !== t[i])
            return false;
    }
    return true;
};