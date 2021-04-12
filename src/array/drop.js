/*
      1.drop(array, count): 得到数组过滤掉左边count个后剩余元素组成的数组
        说明: 不改变当前数组, count默认值为1
        如:drop([1, 3, 5, 7], 2) ===> [5, 7]
      2.dropRight(array, values): 得到数组过滤掉右边count个后剩余元素组成的数组
        说明: 不改变当前数组, count默认值为1
        如:dropRight([1, 3, 5, 7], 2) ===> [1, 3]
    */
export function drop(array, count = 1) {
  const result = [];
  if(count < 1 )count = 1
  for (let index = count ; index < array.length ; index++) {
    result.push(array[index]);
  }
  // filter也行
  return result;
}

export function dropRight(array, count = 1) {
  const result = [];
  if(count < 1 )count = 1
  for (let index = 0; index < array.length - count; index++) {
    result.push(array[index]);
  }
  return result;
}
