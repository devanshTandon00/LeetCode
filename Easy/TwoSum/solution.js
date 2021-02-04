/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = []
    let map = new Map()

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
             arr.push(map.get(nums[i]),i)
             return arr
        }

        map.set(target - nums[i], i)
    }

    return arr
};
