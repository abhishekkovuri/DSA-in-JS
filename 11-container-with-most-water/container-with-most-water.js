/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (h) {
    let i = 0, j = h.length - 1;
    let maxArea = 0;
    while (i < j) {
        // maxArea = Math.max(maxArea, Math.min(h[i], h[j]) * (j - i))
        if (h[i] > h[j]) {
            maxArea = Math.max(maxArea, (j - i) * h[j])
            j--;
        } else {
            maxArea = Math.max(maxArea, (j - i) * h[i])
            i++;
        }
    }
    return maxArea;
};