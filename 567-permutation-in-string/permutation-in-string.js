/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    const hashS1 = Array(26).fill(0);
    const hashS2 = Array(26).fill(0);

    const windowLength = s1.length;
    for (let i = 0; i < windowLength; i++) {
        hashS1[s1.charCodeAt(i) - 97]++;
        hashS2[s2.charCodeAt(i) - 97]++;
    }

    let i = 0;
    let j = windowLength - 1;

    while (j < s2.length) {
        if (isHashSame(hashS1, hashS2)) {
            return true;
        }
        hashS2[s2.charCodeAt(i) - 97]--;
        i++;
        j++;
        if (j < s2.length) {
            hashS2[s2.charCodeAt(j) - 97]++;
        }
    }
    return false;
};

const isHashSame = (h1, h2) => {
    for (let i = 0; i < 26; i++) {
        if (h1[i] !== h2[i]) return false;
    }

    return true;
}