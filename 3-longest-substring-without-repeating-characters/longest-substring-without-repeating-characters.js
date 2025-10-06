/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charMap = {};
    let l = 0;
    let mL = 0;

    for (let r = 0; r < s.length; r++) {
        const currentChar = s[r];

        if (currentChar in charMap && charMap[currentChar] >= l) {
            l = charMap[currentChar] + 1;
        }

        charMap[currentChar] = r;
        mL = Math.max(mL, r - l + 1);
    }

    return mL;
};