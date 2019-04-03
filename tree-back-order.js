/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * 迭代思路
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  if(!root) return [];
  let res = [];
  let list = [root];
  while(list.length) {
      let one = list.pop();
      res.push(one.val);
      one.children && one.children.reduce((pre, item) => {
          list.push(item);
          return list;
      },list);
  }
  return res.reverse();
};

// 递归处理
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
let res = [];
var postorder = function(root) {
    if(!root) {
        return [];
    } else {
        return root.children.reduceRight((res, node) => 
            [...postorder(node), ...res],
            [root.val]
        )                              
    }
};