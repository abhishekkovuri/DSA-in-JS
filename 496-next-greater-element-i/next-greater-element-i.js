/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (n1, n2) {
    let map = {}
    const s = []
    let n = n2.length
    s.push(n2[n - 1])
    map[n2[n - 1]] = -1

    for (let i = n - 2; i >= 0; i--) {
        let top = s[s.length - 1]
        if (top > n2[i]) {
            map[n2[i]] = top
        } else {
            while (s.length) {
                if (s[s.length - 1] < n2[i]) {
                    s.pop();
                } else {
                    map[n2[i]] = s[s.length - 1]
                    break;
                }
            }
            if (!s.length) {
                map[n2[i]] = -1
            }
        }
        s.push(n2[i])
    }
    console.log(map)
    const output = []
    for (let i = 0; i < n1.length; i++) {
        output.push(map[n1[i]])
    }
    return output;
};