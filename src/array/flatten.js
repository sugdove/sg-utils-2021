/*
数组扁平化
1. 理解:
    取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
    如: [1, [3, [2, 4]]] ==> [1, 2, 3, 4]
2. 实现:
    方法一: 递归 + push()
    方法二: 递归 + reduce() + concat()
    方法三: ... + some() + concat()   
*/
// 个人写的 递归 + push()
export function flatten1(array) {
  const arr = [];
  function pushFn(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        pushFn(array[i]);
      } else {
        arr.push(array[i]);
      }
    }
  }
  pushFn(array);
  return arr;
}
// 方法二: 递归 + reduce() + concat() [1, [3, [2, 4]]] ==> [1, 2, 3, 4]
export function flatten2(array) {
  return array.reduce(
    (preTotal, item) => {
      if (Array.isArray(item)) {
        preTotal = preTotal.concat(flatten2(item));
      } else {
        preTotal.push(item);
      }
      return preTotal;
    },
    []
  );
}
//方法三: ... + some() + concat() [1, [3, [2, 4]]] ==> [1, 2, 3, 4]
export function flatten3(array) {
  while (array.some( item => Array.isArray(item))){
    array = [].concat(...array)
  }
  return array
}
