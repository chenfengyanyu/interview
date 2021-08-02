// 定义 Promise 的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor(handle) {
    // 添加状态
    this._status = PENDING
    // 存值
    this._value = undefined
    // 添加成功回调函数队列
    this._fulfilledQueues = []
    // 添加失败回调函数队列
    this._rejectedQueues = []
    // 执行 handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this))
    } catch(err) {
      this._reject(err)
    }
  }
  // resolve 函数
  _resolve(val) {
    if(this._status !== PENDING) return
    this._status = FULFILLED
    this._value = val
  }
  // reject 函数
  _reject(err) {
    if(this._status !== PENDING) return
    this._status = REJECTED
    this._value = err
  }
  // then 方法
  then(onFulfilled, onRejected) {
    const {_status, _value} = this
    switch(_status) {
      // 当状态为 pending 时，将 then 方法回调函数加入执行队列等待执行
      case PENDING:
        this._fulfilledQueues.push(onFulfilled)
        this._rejectedQueues.push(onRejected)
        break
      // 当状态改变时，立即执行对应的回调函数
      case FULFILLED:
        onFulfilled(_value)
        break
      case REJECTED:
        onRejected(_value)
        break
    }
    // 返回一个新的 promise 对象
    return new MyPromise((onFulfilled, onRejected) => {
    })
  }
  // 添加catch方法
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
  // 添加静态all方法
  static all (list) {
    return new MyPromise((resolve, reject) => {
      /**
       * 返回值的集合
       */
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
        this.resolve(p).then(res => {
          values[i] = res
          count++
          // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
          if (count === list.length) resolve(values)
        }, err => {
          // 有一个被rejected时返回的MyPromise状态就变成rejected
          reject(err)
        })
      }
    })
  }
  // 添加静态race方法
  static race (list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }
}