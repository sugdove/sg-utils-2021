export function throttle(callback, delay) {
  let pre = 0
  return function (event) { // return的是handleClick事件 event为点击事件的参数 this为触发事件的button
    let current = Date.now()
    if (current - pre > delay) {
      callback.call(this, event)
      pre = current
    }
  }
}