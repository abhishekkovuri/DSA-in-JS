/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const sumSet = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (sumSet.hasOwnProperty(diff)) {
            return [i, sumSet[diff]]
        }
        sumSet[nums[i]] = i;
    }
};