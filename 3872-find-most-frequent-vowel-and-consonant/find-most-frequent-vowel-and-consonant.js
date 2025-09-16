/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const countHash = {};
    for (let i = 0; i < s.length; i++) {
        countHash[s[i]] = (countHash[s[i]] || 0) + 1;
    }

    let maxVowelCount = 0;
    let maxConsonentCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            maxVowelCount = Math.max(maxVowelCount, countHash[s[i]])
        } else {
            maxConsonentCount = Math.max(maxConsonentCount, countHash[s[i]])
        }
    }

    return maxVowelCount + maxConsonentCount;
};