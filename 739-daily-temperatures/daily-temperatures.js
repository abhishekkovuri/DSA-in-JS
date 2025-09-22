/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (t) {
     let stack = [];
    let n = t.length;
    let ans = Array(n).fill(0);

    stack.push(n-1);
    for(let i = n-2; i >= 0; i--){
        while(stack.length) {
            let top = stack[stack.length-1];
            if(t[i] >= t[top]) {
                stack.pop();
            } else {
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i);
    }
    return ans;
};