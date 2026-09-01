/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const billCount = [0, 0]
    for(let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) {
            ++billCount[0];
        } else if(bills[i] === 10) {
            billCount[1]++;
            billCount[0]--;
        } else {
            if(billCount[1]) {
                billCount[1]--;
                billCount[0]--;
            } else {
                billCount[0] = billCount[0] - 3;
            }
        }

        if(billCount[0] < 0) {
            return false;
        }

    }
    return true;

};