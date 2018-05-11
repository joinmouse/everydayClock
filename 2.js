// ＠param　t: 时间毫秒数, callback: 回调函数

function execTime(t, callback) {
  return setTimeout(callback,t)
}

// 立即输出１和２，３秒后输出3
console.log(1)
execTime(3000, function() {
  console.log(3)
})
console.log(2)