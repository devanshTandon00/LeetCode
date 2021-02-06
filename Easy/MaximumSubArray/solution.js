//brute force
// time limit exceeds on the testcase#201
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = INTEGER.MIN_VALUE
    let sum = INTEGER.MIN_VALUE

    if(nums.length < 2){
        return nums[0]
    }

    for(let i = 0; i < nums.length; i++){
        sum = 0
        for(let j = i; j < nums.length; j++){
            sum += nums[j]
            maxSum = Math.max(sum, maxSum)
        }
    }
    return sum>maxSum ? sum: maxSum
};
