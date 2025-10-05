/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charIndexMap = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        if (currentChar in charIndexMap && charIndexMap[currentChar] >= left) {
            left = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = right;

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};