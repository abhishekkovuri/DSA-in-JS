/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
    if (k === 1) return nums;

    const q = []; // will store indices
    const ans = [];
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // Remove indices that are out of the current window
        if (q.length && q[0] <= i - k) {
            q.shift();
        }

        // Remove smaller elements from the back
        while (q.length && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }

        // Add current index
        q.push(i);

        // Record the max for the window (only after the first k - 1 elements)
        if (i >= k - 1) {
            ans.push(nums[q[0]]);
        }
    }
    return ans
};