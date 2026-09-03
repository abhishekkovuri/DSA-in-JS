/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (arr) {
    arr.sort((a, b) => a[1] - b[1]);
    let ans = 0;
    let prevEnd = arr[0][1];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] < prevEnd) {
            ans++;
        } else {
            prevEnd = arr[i][1];
        }
    }

    return ans;
};