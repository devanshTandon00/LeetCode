/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // we get carry by using the '&' operator and shifting the result left by 1
    // then we use the '^' XOR operator to simulate addition
    // finally we set our b to carry
    // since b holds our carry, when we do XOR for a and b, a adds carry
    while(b != 0){
        let carry = (a & b) << 1
        a = a ^ b
        b = carry
    }
    return a
};
