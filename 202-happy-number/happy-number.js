/**
 * @param {number} n
 * @return {boolean}
 */

const sumOfIndividualNumbers = (num) => {
    let squaredNumber = 0
    while (num > 0) {
        rem = num % 10;
        squaredNumber += Math.pow(rem, 2)
        num = Math.floor(num / 10);
    }
    return squaredNumber;
}

var isHappy = function (n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n)
        n = sumOfIndividualNumbers(n);
    }
    return n === 1;
};