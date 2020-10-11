/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let j = 0;

    while(j < k){
        for(let i = nums.length - 1; i > 0; i--){
            let temp = nums[i]
            nums[i] = nums[i - 1]
            nums[i - 1] = temp
        }

        j++;
    }
};
