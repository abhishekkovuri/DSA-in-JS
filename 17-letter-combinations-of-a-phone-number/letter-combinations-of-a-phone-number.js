/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let result = [''];

    for (let i = 0; i < digits.length; i++) {
        let letters = phoneMap[digits[i]]
        let temp = []
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < letters.length; j++) {
                temp.push(result[i] + letters[j])
            }
        }
        
        result = temp;
    }

    return result;
};