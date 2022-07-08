// 自己写的方法
export function chunk(array, size = 1) {
  const arr = []
  let times = Math.ceil(array.length / size)
  for (let i = 0; i < times; i++) {
    arr.push(array.slice(i * size, (i + 1) * size))
  }
  return arr
}

// export function chunk(array, size) {
//   const result = []
//   eachTimes = Math.ceil(array.length / size)
//   for (let i = 0; i < eachTimes.length; i++) {
//     const arr = []
//     for (let j = 0; j < size.length; j++) {
//       arr.push(i * size + j)
//     }
//     result.push(arr)
//   }
//   return result
// }
