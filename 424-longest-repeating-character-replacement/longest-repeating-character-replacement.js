/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let i = 0
    let j = 0
    const mapChar = { [s[0]]: 1 }
    let maxWindow = 0
    while (j < s.length) {
        if (isValidWindow(mapChar, k)) {
            maxWindow = Math.max(maxWindow, j - i + 1)
            j++;
            if(!mapChar[s[j]]) mapChar[s[j]] = 0;
            mapChar[s[j]]++ 
        } else {
            mapChar[s[i]]--;
            i++;
        }
    }
    return maxWindow;
};


const isValidWindow = (mapChar, k) => {
    let totalCount = maxIndividualCharCount = 0;
    for (let i = 0; i < 26; i++) {
        const c = String.fromCharCode(i + 65)
        if (mapChar[c]) {
            totalCount += mapChar[c]
            maxIndividualCharCount = Math.max(maxIndividualCharCount, mapChar[c])
        }
    }

    return (totalCount - maxIndividualCharCount) <= k
}
