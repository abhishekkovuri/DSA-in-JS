/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let loc = Array(10001).fill(0)
    for (let i = 0; i < trips.length; i++) {
        let [peo, f, t] = trips[i];
        loc[f] = loc[f] + peo;
        loc[t] = loc[t] - peo;
    }

    let usedCapacity = 0;
    for (let i = 0; i <= loc.length; i++) {
        usedCapacity += loc[i];
        if (usedCapacity > capacity) {
            return false;
        }
    }

    return true;
};