Function.prototype.call = function (obj, ...args) {
  // this指向call调用的函数
  // 思路:obj对象中添加一个临时方法obj.fn，就改变了原方法中的指向obj

  //处理obj是undefined和null的情况
  if (obj === undefined || obj === null) {
    obj = window;
  }

  // 给obj添加方法tempFn
  obj.tempFn = this;

  // 调用obj的tempFn方法 获取返回值result
  const result = obj.tempFn(...args);

  // 删除临时方法tempFn
  delete obj.tempFn;

  // 返回返回值
  return result;
};
Function.prototype.apply = function (obj, args) {
  // this指向call调用的函数
  // 思路:obj对象中添加一个临时方法obj.fn，就改变了原方法中的指向obj

  //处理obj是undefined和null的情况
  if (obj === undefined || obj === null) {
    obj = window;
  }

  // 给obj添加方法tempFn
  obj.tempFn = this;

  // 调用obj的tempFn方法 获取返回值result
  const result = obj.tempFn(...args);

  // 删除临时方法tempFn
  delete obj.tempFn;

  // 返回返回值
  return result;
};
Function.prototype.bind = function (obj, ...args) {
  return  (...args2) => {
    return this.call(obj, ...args, ...args2);
  };
};

function fn(a, b) {
  this.xxx = 111;
  console.log(a, b, this);
  return a + b;
}

var obj = { m: 0 };

fn.call(obj, 1, 2);

fn.apply(obj, [1, 2]);

fn.bind(obj, 1)(2, 3);