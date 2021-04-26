export function myInstanceof(obj, Fn){
  // 得到第一个原型对象
  let protoObj = obj.__proto__
  while (protoObj !== null) { // 存在原型对象
    // 如果就是Fn的原型对象, 直接返回true
    if(protoObj === Fn.prototype){
      return true
    }
    // 取出下一个原型对象, 并保存
    protoObj = protoObj.__proto__
  }
  return false
}