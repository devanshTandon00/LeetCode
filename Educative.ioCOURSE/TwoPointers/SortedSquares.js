/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    const newA = nums.map((num, index) => {
        return num = num*num
    })
    
    newA.sort((a,b) => a - b)
    return newA
};