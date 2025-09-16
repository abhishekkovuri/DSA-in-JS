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
    // for (let i = 0; i < s.length; i++) {
    //     if (vowels.includes(s[i]) && countHash[s[i]] > maxVowelCount) {
    //         maxVowelCount = countHash[s[i]]
    //     } else if (!vowels.includes(s[i]) && countHash[s[i]] > maxConsonentCount) {
    //         maxConsonentCount = countHash[s[i]]
    //     }
    // }

    Object.keys(countHash).forEach(letter => {
        if (vowels.includes(letter) && maxVowelCount < countHash[letter]) {
            maxVowelCount = countHash[letter]
        }
        if (!vowels.includes(letter) && countHash[letter] > maxConsonentCount) {
            maxConsonentCount = countHash[letter]
        }
    })

    return maxVowelCount + maxConsonentCount;
};