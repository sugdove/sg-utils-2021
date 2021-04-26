/*
    浅拷贝方法
          利用es5的语法: for...in
*/
export function clone(target){
  // 过滤掉不是对象和数组的情况
  if(target === null || typeof target !== 'object')return target
  // 如果是数组或者对象
  let result = Array.isArray(target) ? [] : {}
  for(let key in target){
    result[key] = target[key]
  }
  return result
}