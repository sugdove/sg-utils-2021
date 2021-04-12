export function newInstance(Fn, ...args) {
  let obj = {};
  const result = Fn.call(obj, ...args);
  obj.__proto__ = Fn.prototype;
  if (result instanceof Object) {
    return result;
  }
  return obj;
}
