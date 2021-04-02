export function map(array, callback) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr[i] = callback(array[i], i)
  }
  return arr
}

export function forEach(array, callback){
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i)
  }
}

export function reduce(array, callback, initValue = 0) {
  for (let i = 0; i < array.length; i++) {
    initValue = callback(initValue, array[i], i)
  }
  return initValue
}

export function filter(array, callback) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    if(callback( array[i], i))arr.push(array[i])
  }
  return arr
}

export function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback( array[i], i))return array[i]
  }
}

export function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback( array[i], i))return i
  }
}

export function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(!callback( array[i], i))return false
  }
  return true
}

export function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback( array[i], i))return true
  }
  return false
}