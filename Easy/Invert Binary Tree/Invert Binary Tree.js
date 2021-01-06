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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    invert(root)
    return root
};

function invert(root){
     if(!root)
        return
      let left = invert(root.left)
      let right = invert(root.right)

      let temp = root.left
      root.left = root.right
      root.right = temp
  }
