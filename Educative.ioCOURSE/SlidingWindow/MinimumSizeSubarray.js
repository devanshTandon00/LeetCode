/**
O(n) time complexity, as one for loop that goes through each element,
 however the while loop processes each element only once.
 O(1) space complexity
*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let count = 100000
    let sum = 0
    let start = 0

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]

        while(sum >= target){
            count = Math.min(count, i - start + 1)
            sum -= nums[start]
            start++
        }
    }

    if(count == 100000)
        count = 0
    return count
};
