/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const st = [];
    const m = { '(': ')', '{': '}', '[': ']' };
    for (let char of s) {
        if (m[char]) {
            st.push(char)
        } else {
            const topElement = st.pop();
            if (m[topElement] !== char) return false;
        }
    }
    return st.length === 0;
}