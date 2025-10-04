/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const n = height.length
    let l = 1;
    let r = n - 2;
    let maxL = new Array(n).fill(0)
    let maxR = new Array(n).fill(0)
    maxL[0] = height[0]
    maxR[n - 1] = height[n - 1]
    while (l < n && r >= 0) {
        maxL[l] = Math.max(height[l], maxL[l - 1])
        maxR[r] = Math.max(height[r], maxR[r + 1])
        l++, r--;
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        const trappedWater = Math.min(maxL[i], maxR[i]) - height[i]
        ans += Math.max(trappedWater, 0)
    }

    return ans;
};