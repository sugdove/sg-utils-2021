/*
      difference(arr1, arr2): 得到当前数组中所有不在arr2中的元素组成的数组(不改变原数组)
        如: difference([1, 3, 5, 7], [5, 8]) ===> [1, 3, 7]
*/

export function difference(arr1, arr2) {
  const arr = [];
  arr1.forEach((el) => {
    if (arr2.indexOf(el) === -1) {
      arr.push(el);
    }
  });
  return arr;

  return arr1.filter(item=> arr2.indexOf(item) === -1)

}
