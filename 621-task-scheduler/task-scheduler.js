/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    const countHash = {}
    let maxFreq = 0
    tasks.forEach(task => {
        if (!countHash[task]) {
            countHash[task] = 0;
        }
        countHash[task]++;
        maxFreq = Math.max(maxFreq, countHash[task])
    })

    let count = 0;
    for(let key in countHash) {
        if(countHash[key] === maxFreq) {
            count++;
        }
    }

    return Math.max(((n + 1) * (maxFreq - 1) + count), tasks.length);
};