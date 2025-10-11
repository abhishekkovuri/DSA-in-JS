/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split(' ')
    let ans = ''
    for (let i = 0; i < s.length; i++) {
        const reverseWord = reverseString(s[i])
        ans += i === 0 ? reverseWord : ` ${reverseWord}`
    }
    return ans;
};

const reverseString = (word) => {
    word = word.split('')
    let i = 0, j = word.length - 1
    while (i < j) {
        [word[i], word[j]] = [word[j], word[i]]
        i++; j--
    }

    return word.join('');
}