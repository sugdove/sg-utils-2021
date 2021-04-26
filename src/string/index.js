export function reverseString(str){
  return str.split('').reverse().join('')
}

export function palindrome(str){
  return reverseString(str) === str
}

export function truncate(str, num){
  if(str.length <= num)return str
  return str.substring(0,num) + '...'
  // return str.split('').slice(0, num).join('') + '...'
}