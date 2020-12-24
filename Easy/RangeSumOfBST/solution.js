/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
let sum;

const rangeSumBST = (root, low, high) => {
    sum = 0
    dfs(root, low, high)
    return sum;
};

function dfs(root, low, high){
    if(root == null)
        return;

    if(low <= root.val && high >= root.val){
        sum += root.val
    }

    // Everything to the left of root.val will be less than root.val
    // so, if root.val > low, no point in checking further
    if(root.val > low){
        dfs(root.left, low, high)
    }

    // if root.val < high, no point in checking further
    if(root.val < high){
        dfs(root.right, low, high)
    }
}
