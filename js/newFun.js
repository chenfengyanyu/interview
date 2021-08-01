// 实现 New 过程
function newFun() {
  let obj = {};
  //shift方法去除数组第一个元素，并返回
  let constru = [].shift.call(arguments);
  //实例的隐式原型指向构造函数原型
  obj.__proto__ = constru.prototype;
  //使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  constru.apply(obj, arguments);
  //返回该对象
  return obj;
}