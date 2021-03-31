function map(array, callback) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr[i] = callback(array[i], i)
  }
  return arr
}

function reduce(array, callback, initValue = 0) {
  for (let i = 0; i < array.length; i++) {
    initValue = callback(initValue, array[i], i)
  }
  return initValue
}

function filter(array, callback) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    if(callback( array[i], i))arr.push(array[i])
  }
  return arr
}

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback( array[i], i))return array[i]
  }
}

function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback( array[i], i))return i
  }
}

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(!callback( array[i], i))return false
  }
  return true
}

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback( array[i], i))return true
  }
  return false
}