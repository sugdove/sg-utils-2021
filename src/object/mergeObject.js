/*
     对象合并
     mergeObject(...objs)
     功能: 合并多个对象, 返回一个合并后的对象（不改变原对象）
     合并前: 
          { a: [{ x:2}, { y: 4}], b:1}
          { a: { z: 3}, b: [2, 3], c:'foo'}
      合并后:
          { a: [ { x : 2 },{ y : 4 },{ z: 3}], b:[ 1, 2, 3], c:'foo'}
*/
export function mergeObject(...objs){
  let result = {}
  objs.forEach(obj => {
    Object.keys(obj).forEach(key =>{
      if(!result.hasOwnProperty(key)){
        result[key] = obj[key] 
      }
      else{
        result[key] = [].concat(result[key], obj[key])
      }
    })
  })
  return result
}