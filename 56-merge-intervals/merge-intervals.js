/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    const n = arr.length;
    arr.sort((a, b) => (a[0] - b[0]));
    const ans = [arr[0]]
    for(let i = 1; i < n; i++) {
        const al = ans.length;
        if(arr[i][0] <= ans[al - 1][1]) {
            ans[al - 1][1] = Math.max(arr[i][1], ans[al - 1][1]);
        } else {
            ans.push(arr[i])
        }
    }
    return ans;
};