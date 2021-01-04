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
let min, arr
var minDiffInBST = function(root) {
    arr = []
    min = 1000000000000000000000
    dfs(root)
    console.log(arr)
    for(let i = 0; i < arr.length - 1; i++){
        let diff = arr[i+1]- arr[i]
        min = Math.min(min, Math.abs(diff))
        console.log("here " + diff)
        console.log("here " + min)
    }
    return min
};

const dfs = (root) => {
    if(!root){
        return 0
    }
    dfs(root.left)
    arr.push(root.val)
    dfs(root.right)
}
