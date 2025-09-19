/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const map = { '(': ')', '{': '}', '[': ']' };
    for (let char of s) {
        if (map[char]) {
            stack.push(char)
        } else {
            const topElement = stack.pop();
            if (map[topElement] !== char) return false;
        }
    }
    return stack.length === 0;
}