/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // s = s.toLowerCase()
    // let filteredString = reverseString = ''
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i].match(/[a-z0-9]/i)) {
    //         filteredString += s[i]
    //         reverseString = s[i] + reverseString;
    //     }
    // }
    // return reverseString === filteredString;

    s = s.toLowerCase()
    let x = 0, y = s.length - 1

    while(x < y) {
        if(!s[x].match(/[a-z0-9]/i)) x++;
        else if(!s[y].match(/[a-z0-9]/i)) y--;
        else if(s[x] !== s[y]) return false;
        else {
            x++;
            y--;
        }
    }
    return true;
};