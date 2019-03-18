/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if(!root) return [];
  let res = [];
  let list = [root];
  while(list.length) {
      let one = list.pop();
      res.push(one.val);
      one.children && one.children.reduceRight((pre, item) => {
          list.push(item);
          return list;
      },list);
  }
  return res;
};

preorder({"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1});