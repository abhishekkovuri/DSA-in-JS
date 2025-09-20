/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    // let stack = []
    let level = 0;
    let output = ''
    for (let i = 0; i < s.length; i++) {
        // with stack
        // if (s[i] === '(') {
        //     stack.push(s[i])
        //     let len = stack.length
        //     if (len > 1) {
        //         output += s[i]
        //     }
        // } else {
        //     let len = stack.length
        //     if (len > 1) {
        //         output += s[i]
        //     }
        //     stack.pop()
        // }
        if (s[i] === '(') {
            level++
            output += (level > 1) ? s[i] : ''
        } else {
            output += (level > 1) ? s[i] : ''
            level--;
        }
    }
    return output;
};