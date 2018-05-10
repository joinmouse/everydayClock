//　函数执行会消耗时间参数传递
function execTime(time) {
  let endTime = Date.now() + time
  let currentTime = Date.now()
  while(currentTime <= endTime) {
    currentTime = Date.now()
  }
}

console.log(1)  
execTime(3000)  //运行3秒钟
console.log(2)