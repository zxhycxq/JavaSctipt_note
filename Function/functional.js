function flatten(arr) {
  var arr = arr || [],
      resArr = [],
      len = arr.length;
  
  for (var i = 0; i < len; i++) {
    if (Array.isArray (arr[i])) {
      resArr = resArr.concat (flatten (arr[i]))
    } else {
      resArr.push (arr[i])
    }
  }
  return resArr
}

// todo 原型链上添加、三元运算符     foreach reduce 改写
