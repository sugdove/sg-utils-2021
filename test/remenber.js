Function.prototype.call = function (obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = window;
  }
  obj.tempFn = this;
  const result = obj.tempFn(...args);
  delete obj.tempFn;
  return result;
};

Function.prototype.apply = function (obj, args) {
  if (obj === undefined || obj === null) {
    obj = window;
  }
  obj.tempFn = this;
  const result = obj.tempFn(args);
  delete obj.tempFn;
  return result;
};

Function.prototype.bind = function (obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = window;
  }
  return (...args2) => {
    this.call(obj, ...args, ...args2)
  };
};

function throttle(callback, delay){
  let startTime = 0
  return function(event){// return的是handleClick事件 event为点击事件的参数 this为触发事件的button
    let endTime = Date.now()
    if(endTime-startTime > delay){
      callback.call(this,event)
      startTime = Date.now()
    }
  }
}

function debounce(callback, delay){
  let startTime = null
  return function(event){
    clearTimeout(startTime)
    startTime = setTimeout(callback.bind(this,event), delay)
  }
}

Array.prototype.map = function(callback){
  const arr = []
  for (let i = 0; i < this.length; i++){
    arr.push(callback(this[i],i))
  }
  return arr
}

Array.prototype.reduce = function(callback, initValue = 0){
  for (let i = 0; i < this.length; i++){
    initValue = callback(initValue,this[i],i)
  }
  return initValue
}

Array.prototype.filter = function(callback){
  const arr = []
  for (let i = 0; i < this.length; i++){
    if(callback(this[i],i)){
      arr.push()
    }
  }
  return arr
}