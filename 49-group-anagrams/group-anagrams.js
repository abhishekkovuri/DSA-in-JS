/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // const anagrams = {}
    // for (let word of strs) {
    //     const wordKey = word.split('').sort().join('')
    //     if (!anagrams[wordKey]) anagrams[wordKey] = []
    //     anagrams[wordKey].push(word);
    // }

    // return Object.values(anagrams)

    let map = {};

    for (let i = 0; i < strs.length; i++) {
        let freqArr = Array(26).fill(0);
        let s = strs[i];

        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
            freqArr[index]++;
        }

        console.log({freqArr})

        let key = "";
        for (let k = 0; k < 26; k++) {
            key += "#" + freqArr[k];
        }

        if (!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
    }

    return Object.values(map);
};