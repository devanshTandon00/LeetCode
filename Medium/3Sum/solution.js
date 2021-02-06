// Incomplete solution --- provides duplicate answers
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    let sum = 0
    if(nums.length < 3)
        return res

    nums.sort()

    for(let low = 0; low < nums.length; low++){
          let mid = low + 1
          let high = nums.length - 1

          while(mid < high){
              sum = nums[low] + nums[mid] + nums[high]
              if(sum == 0){
                  res.push([nums[low], nums[mid], nums[high]])
                  mid++
                  high--
              }
              else if(sum < 0)
                  mid++
              else
                  high--
          }
    }

    return res
};
