/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
    const freq = new Map()
    nums.forEach(num => {
        freq.set(num, (freq.get(num) || 0) + 1);
    })

    let xor = 0;
    for (let [num, count] of freq) {
        if (count === 2) xor ^= num;
    }
    return xor;
};