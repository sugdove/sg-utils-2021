export function slice(array, start, end) {
  const arr = [];
  // 如果没有指定start和end返回array
  start = start || 0;
  end = end || array.length;
  // 原数组为空数组
  if (array.length === 0) {
    return array;
  }
  // 如果start小于0
  if (start < 0) {
    start = 0;
  }
  // 如果end超过array.length-1
  if (end > array.length ) {
    end = array.length;
  }

  for (let index = start; index < end; index++) {
    arr.push(array[index]);
  }

  return arr;
}
