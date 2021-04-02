/*
  去重实现:

    方法1: 利用forEach()和indexOf

    方法2: 利用forEach()加对象容器
         说明:只需一次遍历，效率高
    方法3: es6 new Set()
 
 */
export function unique1(array) {
  const arr = [];
  array.forEach((item) => {
    if (arr.indexOf(item) < 0) {
      arr.push(item);
    }
  });
  return arr;
}

export function unique2(array) {
  const arr = [];
  const obj = {};
  array.forEach((item) => {
    // if (!obj.item) {
    if (!obj.hasOwnProperty(item)) {
      arr.push(item);
      obj[item] = true;
    }
  });
  return arr;
}

export function unique3(array) {
  return Array.from(new Set(array));
  return [...new Set(array)];
}
