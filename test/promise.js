// 原型链继承，将子类的原型链指向父类的实例
// 优点：可继承构造函数的属性，父类构造函数的属性，父类原型的属性
// 缺点：无法向父类构造函数传参；且所有实例共享父类实例的属性，
// 若父类共有属性为引用类型，一个子类实例更改父类构造函数共有属性时会导致继承的共有属性发生变化；实例如下：
function Parent() {
  this.name = "parent";
  this.age = 12;
}

Parent.prototype.sayHi = function() {
  console.log("hi");
};

function me() {}

me.prototype = new Parent();
var test = new me();
console.log(test.name);
console.log(test.age);
test.sayHi();
console.log("---------------------------------------");

// 构造函数继承
function Parent2(name, age) {
  this.name = name;
  this.age = age;
  this.parentName = function() {
    console.log(this.name);
  };
}
Parent2.prototype.sayHi = function() {
  console.log("hi");
};
function child(name, age) {
  Parent2.call(this, name, age);
}
var test2 = new child("sug", 12);
console.log(test2.name);
console.log(test2.age);
test2.parentName();
// test2.sayHi()

// 组合继承
function Parent3(name, age) {
  this.name = name;
  this.age = age;
  this.parentName = function() {
    console.log(this.name);
  };
}

Parent3.prototype.sayHi = function() {
  console.log("hi");
};
function child3(name, age) {
  Parent3.call(this, name, age);
}
child3.prototype = new Parent3();
function timeout(ms) {
  return new Promise((resolve, reject) => {
    if (typeof ms === "number") {
      setTimeout(resolve, ms, ms);
    } else {
      reject("错误的传参:" + ms);
    }
  });
}

timeout(1000)
  .then(value => {
    console.log(value);
    return timeout(2000);
  })
  .catch(err => {
    console.log(err);
  })
  .then(value2 => {
    console.log(value2);
    return timeout(3000);
  })
  .catch(err2 => {})
  .then(value3 => {
    console.log(value3);
  });

Promise.all([timeout(1000), timeout(1000), timeout(1000), timeout("11")])
  .then(value => {
    console.log(value);
    console.log(value[0]);
    console.log(111);
  })
  .catch(err => {
    console.log(err);
  });