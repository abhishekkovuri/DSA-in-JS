/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let currentGain = 0;
    let totalGain = 0;
    let ans = 0;
    for (let i = 0; i < gas.length; i++) {
        currentGain = currentGain + (gas[i] - cost[i])
        totalGain = totalGain + (gas[i] - cost[i])
        if(currentGain < 0) {
            ans = i + 1;
            currentGain = 0;
        }
    }

    return totalGain >= 0 ? ans: -1;

};