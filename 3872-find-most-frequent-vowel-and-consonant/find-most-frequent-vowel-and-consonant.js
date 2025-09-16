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
        if (vowels.includes(s[i]) && countHash[s[i]] > maxVowelCount) {
            maxVowelCount = countHash[s[i]]
        } else if (!vowels.includes(s[i]) && countHash[s[i]] > maxConsonentCount) {
            maxConsonentCount = countHash[s[i]]
        }
    }

    return maxVowelCount + maxConsonentCount;
};