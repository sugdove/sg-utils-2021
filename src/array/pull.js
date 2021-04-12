/*
      1.pull(array, ...values): 删除数组中与value相同的元素,返回所有删除元素的数组
        说明: 数组发生了改变
        如: pull([1, 3, 5, 3, 7], 2, 7, 3, 7) ===> 数组变为[1, 5],返回值为[3, 3, 7]
      2.pullAll(array, values): 功能与pull一直,只是参数变为数组
        如: pullAll([1, 3, 5, 3, 7], [2, 7, 3, 7]) ===> 数组变为[1, 5],返回值为[3, 3, 7]
    */
export function pull(array, ...values) {
  const result = [];
  for(let i=0; i<array.length; i++){
    let item = array[i]
    if(values.indexOf(item) !== -1){
      array.splice(i, 1);
      result.push(item);
      // 下标-1 实际数组长度-1后正确的下标 
      i--
    }
  }
  // 此处是错误写法 在array中splice后数组长度-1 下一次循环就会跳过一个数据
  // array.forEach((item, index) => {
  //   if (values.indexOf(item) !== -1) {
  //     array.splice(index, 1);
  //     result.push(item);
  //   }
  // });
  return result;
}

export function pullAll(array, values) {
  return pull(array, ...values)
}