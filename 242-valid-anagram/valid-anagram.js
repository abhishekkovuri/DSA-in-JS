/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const stringMap = {}

    for (let i = 0; i < s.length; i++) {
        if (!stringMap[s[i]]) stringMap[s[i]] = 0
        stringMap[s[i]]++
    }

    for (let i = 0; i < t.length; i++) {
        if (!stringMap[t[i]]) return false;
        stringMap[t[i]]--
    }
    return true;
};