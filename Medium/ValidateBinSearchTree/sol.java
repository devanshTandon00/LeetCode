/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
 //https://www.facebook.com/watch/?v=614974885806717
class Solution {
    public boolean isValidBST(TreeNode root) {
        return validate(root, null, null);
    }

    public boolean validate(TreeNode root, TreeNode left, TreeNode right){
        if(root == null)
            return true;

        if(left != null && left.val >= root.val)
            return false;

        if(right != null && right.val <= root.val)
            return false;

        boolean l = validate(root.left, left, root);
        boolean r = validate(root.right, root, right);

        return l && r;
    }
}
