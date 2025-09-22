/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (a) {
    // const na = [...a, ...a]
    // const n = na.length
    // const ans = Array(n).fill(-1)
    // const s = [na[n - 1]]

    // for (let i = n - 2; i >= 0; i--) {
    //     while (s.length) {
    //         const top = s[s.length - 1]
    //         if (na[i] < top) {
    //             ans[i] = top
    //             break;
    //         } else {
    //             s.pop()
    //         }
    //     }
    //     s.push(na[i])
    // }

    // return ans.slice(0, n/2)

    const n = a.length
    const ans = Array(n).fill(-1)
    const s = [a[n - 1]]

    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (s.length) {
            const top = s[s.length - 1]
            if (a[i % n] < top) {
                ans[i % n] = top
                break;
            } else {
                s.pop()
            }
        }
        s.push(a[i % n])
    }

    return ans.slice(0, n)
};