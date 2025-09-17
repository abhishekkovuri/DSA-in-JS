/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {}
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(hashMap.hasOwnProperty(diff)) {
          return [hashMap[diff], i]
        }
        hashMap[nums[i]] = i
    }
    return [];
};