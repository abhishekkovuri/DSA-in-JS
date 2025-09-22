/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (t) {
    const n = t.length;
    const s = [n - 1]
    const ans = [];
    ans[n-1] = 0

    for (let i = n - 2; i >= 0; i--) {
        while (s.length) {
            let top = s[s.length - 1];
            if (t[i] >= t[top]) {
                s.pop();
            } else {
                ans[i] = top - i;
                break;
            }
        }
        if (!s.length) ans[i] = 0
        s.push(i)
    }

    return ans

};