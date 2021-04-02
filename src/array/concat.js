/*
 
*/
export function concat(array,...args){
  const arr = [...array]
  // 遍历args,将value或者value的元素添加到arr中
  args.forEach(item =>{
    if(Array.isArray(item)){
      arr.push(...item)
    }
    else{
      arr.push(item)
    }
  })
  return arr
}