import { call } from './call'
export function debounce(callback, delay) {
  // let timeId = null
  return function (event) {
    // if(timeId)clearTimeout(timeId)
    // timeId = setTimeout(callback.bind(this,event),delay)
    if (callback.hasOwnProperty('timeout')) {
      clearTimeout(callback.timeout)
    }
    callback.timeout = setTimeout(() => {
      call(callback, this, event)
      delete callback.timeout
    }, delay)
  }
}
