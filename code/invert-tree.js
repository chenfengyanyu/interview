/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 翻转一棵二叉树。
 * @param {TreeNode} root
 * @return {TreeNode}
 * 输入：[4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 */
var invertTree = function(root) {
  if(!root) return null;
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};