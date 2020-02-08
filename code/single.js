// 方式一
const LazySingle = (function(){
  let _instance = null;
  function Single() {
    return {
      publicMethod: function(){
        console.log('Hello, Jartto!');
      },
      publicProperty: '1.0'
    }
  }
  return function() {
    if(!_instance) {
      _instance = Single();
    }
    return _instance;
  }
})();

LazySingle().publicMethod(); // Hello, Jartto!


// 方式二
const LazySingle2 = (function(){
  let _instance = null;

  function Single() {
    this.name = 'Jartto';
    this.sayHello = function() {
      console.log(`Hello, ${this.name}!`);
    }
  }

  return function() {
    if(!_instance) {
      _instance = new Single();
    }
    return _instance;
  }
})();

LazySingle2().sayHello(); // Hello, Jartto!
let abc1 = LazySingle2();
let abc2 = LazySingle2();
console.log(abc1 === abc2); // true;
