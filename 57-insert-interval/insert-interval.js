/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (arr, x) {
    const ans = [];

    let i = 0;
    while (i < arr.length && arr[i][1] < x[0]) {
        ans.push(arr[i])
        i++;
    }

    while (i < arr.length && arr[i][0] <= x[1]) {
        x[0] = Math.min(x[0], arr[i][0])
        x[1] = Math.max(x[1], arr[i][1])
        i++;
    }

    ans.push([x[0], x[1]])

    while (i < arr.length) {
        ans.push(arr[i])
        i++;
    }

    return ans;
};