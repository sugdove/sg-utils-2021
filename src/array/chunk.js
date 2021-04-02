// 自己写的方法
export function chunk(array, size =1){
  const arr = []
  let times = Math.ceil(array.length / size)
  for(let i=0; i<times; i++){
      arr.push(array.slice(i* size , (i+1)*size))
  }
  return arr
}
