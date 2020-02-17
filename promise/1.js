function isType(type) {
  return function (params) {
    console.log(`%c--params-- `, 'color:blue;', params,Object.prototype.toString.call(params))
    return Object.prototype.toString.call(params)==`[object ${type}]`
  }
}

let  isString=isType('String')

console.log(`%c--isString({})-- `, 'color:blue;', isString('red'))

//回调的一个问题
// 1、无法捕获错误 try catch
//2. 不能return
//3、 回调地狱  事件发布订阅解决


