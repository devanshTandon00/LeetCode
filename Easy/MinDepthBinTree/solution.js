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
 * @return {number}
 */
const minDepth = function(root) {
    if (!root){
        console.log("entered null")
         return 0;
    }

    console.log("first " + root.val)

    let left = minDepth(root.left);

    let right = minDepth(root.right);

    if(root.right == null){
        console.log("here@")
        left += 1
        return left
    }

    if(root.left == null){
        console.log("here")
        right += 1
        return right
    }
    console.log("second" + root.val + " " + left + " " + right)

    return Math.min(left, right) + 1
};
