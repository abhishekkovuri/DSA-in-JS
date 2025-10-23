/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1; // unsigned right shift
    }

    // Use >>> 0 to convert to unsigned 32-bit integer
    return result >>> 0;
};