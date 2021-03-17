/**
 * O(n) time and O(1) space solution using two pointers
 * Basic understanding is that once we remove an element, 
 * the size of the array will be reducing and we dont have to update 
 * the i and j counters until they are out of the while loop
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let i = 0, j = i + 1
   
    while(i < nums.length - 1 && j < nums.length){
        while(nums[i] == nums[j]){
            nums.splice(j, 1)
        }

        j++
        i++
    }
    
    return j
};