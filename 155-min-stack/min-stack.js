
var MinStack = function() {
    this.s1 = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(!this.s1.length) {
        this.s1.push([val, val])
    } else {
        let min = Math.min(this.s1[this.s1.length - 1][1], val)
        this.s1.push([val, min])
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.s1.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s1[this.s1.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s1[this.s1.length - 1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */