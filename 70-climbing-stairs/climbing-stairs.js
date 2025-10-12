/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // if (n <= 2) return n;

    // let first = 1, second = 2;
    // for (let i = 3; i <= n; i++) {
    //     let third = first + second;
    //     first = second;
    //     second = third;
    // }
    // return second;

    // dynamic programming
    let dp = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[[i - 2]]
    }
    return dp[n]

    // recursion - time limit exceeds
    // if (n <= 2) return n;
    // return climbStairs(n - 1) + climbStairs(n - 2)
};