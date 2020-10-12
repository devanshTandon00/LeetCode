/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 function helper(nums, start, end){
    if (start > end) {
        return null;
    }

    let middle = start + Math.floor((end - start)/2)
    const node = new TreeNode(nums[middle])
    node.left = helper(nums, start, middle - 1)
    node.right = helper(nums, middle + 1, end)

    return node;
}

var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null
    return helper(nums, 0, nums.length - 1)

}
