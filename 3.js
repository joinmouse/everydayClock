// 用js写出一个对象，使obj.obj.obj.obj = obj,不管obj出现多少次，都等于obj

let obj = {name: 'wuqi'}

obj.obj = obj

console.log(obj)
console.log(obj.obj)
console.log(obj.obj.obj.obj.obj.obj)