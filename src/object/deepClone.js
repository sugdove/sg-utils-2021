/*
    深拷贝方法
      1). 大众乞丐版
          问题1: 函数属性会丢失
          问题2: 循环引用会出错
      2). 面试基础版本
          解决问题1: 函数属性会丢失
      3). 面试加强版本
          解决问题2: 循环引用会出错
      4). 面试加强版本2（优化遍历性能）
          数组: while | for | forEach() 优于 for-in | keys()&forEach()
          对象: for-in 与 keys()&forEach() 差不多

*/

export function deepClone1(target) {
  return JSON.parse(JSON.stringify(target))
}

export function deepClone2(target) {
  // 过滤掉不是对象和数组的情况
  if (target === null) return target
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if (typeof target !== 'object') return target
  // 如果是数组或者对象
  let result = new target.constructor()
  for (let key in target) {
    result[key] = deepClone2(target[key])
  }
  return result
}

export function deepClone3(target, map = new Map()) {
  // 过滤掉不是对象和数组的情况
  if (target === null) return target
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if (typeof target !== 'object') return target
  let cloneTarget = map.get(target)
  if (cloneTarget) return cloneTarget
  // 如果是数组或者对象
  cloneTarget = Array.isArray(target) ? [] : {}
  map = map.set(target, cloneTarget)
  for (let key in target) {
    cloneTarget[key] = deepClone3(target[key], map)
  }
  return cloneTarget
}
// 遍历数组时for in循环效率低下
export function deepClone4(target) {
  // 过滤掉不是对象和数组的情况
  if (target === null) return target
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if (typeof target !== 'object') return target
  // 如果是数组或者对象
  let result
  if (Array.isArray(target)) {
    result = []
    target.forEach((el, index) => {
      result[index] = el
    })
  } else {
    result = {}
    for (let key in target) {
      result[key] = deepClone2(target[key])
    }
  }
  return result
}
