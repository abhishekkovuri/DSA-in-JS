/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = []
    let output = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
            let len = stack.length
            if (len > 1) {
                output += s[i]
            }
        } else {
            let len = stack.length
            if (len > 1) {
                output += s[i]
            }
            stack.pop()
        }
    }
    return output;
};