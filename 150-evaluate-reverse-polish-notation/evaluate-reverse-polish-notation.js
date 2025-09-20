/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const s = []
    const operatorMap = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => Math.trunc(b / a)
    }

    for (let i = 0; i < tokens.length; i++) {
        if (operatorMap[tokens[i]]) {
            let a = s.pop();
            let b = s.pop();
            s.push(operatorMap[tokens[i]](+a, +b))
        } else {
            s.push(tokens[i])
        }
    }
    return Number(s.pop());
};