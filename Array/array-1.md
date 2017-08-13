##属性
`Array.length`
Array 构造函数的 length 属性，其值为1。 范围为 0 到 2的32次方-1 的整数。
可通过length来截断数组，不可通过增大其值去延长这个数组。length属性无法真正表示数组中定义的值的数目。

`Array.prototype`
允许为所有数组对象附加属性

```ecmascript 6
    if(!Array.prototype.first) {
        Array.prototype.first = function() {
            console.log(`如果JavaScript本身不提供 first() 方法， 添加一个返回数组的第一个元素的新方法。`);
            return this[0];
        }
    }
```

##方法

`Array.from()` 
从类数组(拥有一个 length 属性和若干索引属性的任意对象)或者迭代对象（iterable object）中创建一个新的数组实例。
```ecmascript 6
    const abc=["aa","ss","ddd"]
    Array.from(abc)  // ["aa", "ss", "ddd"]
    Array.from("asdf")  // ["a", "s", "d", "f"]
```    

`Array.isArray()`
假如一个变量是数组则返回true，否则返回false。
```ecmascript 6
    Array.isArray(Array.prototype);//    true
    
    //Polyfill
    if (!Array.isArray) {
      Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };
    }
```

`Array.of()` 
创建一个有可变数量的参数的新的数组实例，无论参数有多少数量，而且可以是任意类型。
与Array构造函数的区别：
Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个包含 7 个 undefined 元素的数组。
```ecmascript 6
    Array.of(7) //    [7] length: 1
    Array(7) //    [undefined × 7]      length :7
    
    Array.of(1,3,5)//    [1, 3, 5]
    Array(1,3,5)//    [1, 3, 5]

    if (!Array.of) {
      Array.of = function() {
        return Array.prototype.slice.call(arguments);
      };
    }
```

##数组实例
###属性
`Array.prototype.constructor`
所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。
`Array.prototype.length`
因为 Array.prototype 也是个数组，所以它也有 length 属性，这个值为 0，因为它是个空数组
###方法

Mutator 方法  下面的这些方法会改变调用它们的对象自身的值：

`Array.prototype.copyWithin()` 
在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
arr.copyWithin(目标索引, [源开始索引], [结束源索引])
```ecmascript 6
    ["alpha", "beta", "copy", "delta"].copyWithin(1, 2, 3);//    ["alpha", "copy", "copy", "delta"]
    ['alpha', 'bravo', 'charlie', 'delta'].copyWithin(2, 0); //    ["alpha", "bravo", "alpha", "bravo"]
```
copyWithin 就像 C 和 C++ 的 memcpy 函数一样，且它是用来移动 Array 或者 TypedArray 数据的一个高性能的方法。
复制以及粘贴序列这两者是为一体的操作;即使复制和粘贴区域重叠，粘贴的序列也会有拷贝来的值

`Array.prototype.fill()` 
用一个固定值填充一个数组中从起始索引到终止索引内的全部元素   (类数组亦可调用)
```ecmascript 6
    var numbers = [1, 2, 3]
    numbers.fill(1);     //    [1, 1, 1]
```            
`Array.prototype.pop()`
删除数组的最后一个元素，并返回这个元素。

在一个空数组上调用 pop()，它返回  undefined。

`Array.prototype.push()`
在数组的末尾增加一个或多个元素，并返回数组的新长度。
唯一的原生类数组（array-like）对象是 Strings，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

`Array.prototype.reverse()`
颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
//乾坤颠倒
```ecmascript 6
    
```
`Array.prototype.shift()`
删除数组的第一个元素，并返回这个元素。
shift 方法并不局限于数组：这个方法能够通过 call 或 apply 方法作用于类似数组的对象上。但是对于没有 length 属性（从0开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。

`Array.prototype.sort()`
对数组元素进行排序，并返回当前数组。
  在适当的位置对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
  ```ecmascript 6
    function compareNumbers(a, b) {
      return a - b;      //将数组升序排列
    }
```
`Array.prototype.splice()`
在任意的位置给数组添加或删除任意个元素。
array.splice(start, deleteCount, item1, item2, ...)  //离婚、再婚，

`Array.prototype.unshift()`
在数组的开头增加一个或多个元素，并返回数组的新长度。

Accessor 方法     这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值。

`Array.prototype.concat()`
返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
concat 方法将创建一个新的数组，然后将调用它的对象(this 指向的对象)中的元素以及
所有参数中的数组类型的参数中的元素以及非数组类型的参数本身按照顺序放入这个新数组,并返回该数组.
连接一个或多个数组（值）将不会改变原本的数组/值。进一步说，任何对新数组的操作都不会对原有的数组造成影响（仅当该元素不是对象的引用时），反之亦然。
```ecmascript 6
    let arr1 = ["a", "b", "c"];
    let arr2 = ["d", "e", "f"];
    
    let arr3 = arr1.concat(arr2);// ["a", "b", "c", "d", "e", "f"]
```

`Array.prototype.includes()` 
判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。   通用方法
```ecmascript 6
    [1, 2, 3].includes(2);     // true
    [1, 2, 3].includes(4);     // false
    [1, 2, 3].includes(3, 3);  // false
    [1, 2, 3].includes(3, -1); // true
    [1, 2, NaN].includes(NaN); // true
```
`Array.prototype.join()`
将数组（或一个类数组对象）的所有元素连接到一个字符串中。
默认为 ",",分隔符 === 空字符串 ""
```ecmascript 6
    
```            
            
`Array.prototype.slice()`
抽取当前数组中的一段元素组合成一个新数组。
slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个数组
```ecmascript 6
    function list() {
      return Array.prototype.slice.call(arguments);       //[].slice.call(arguments) 
    }
    
    var list1 = list(1, 2, 3); // [1, 2, 3]
    
    var unboundSlice = Array.prototype.slice;
    var slice = Function.prototype.call.bind(unboundSlice);
    
    function list() {
      return slice(arguments);
    }
    
    var list1 = list(1, 2, 3); // [1, 2, 3]
```
`Array.prototype.toSource()` 
返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 Object.prototype.toSource() 方法。

`Array.prototype.toString()`
返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法。
Array 对象覆盖了 Object 的 toString 方法。对于数组对象，toString 方法返回一个字符串，
该字符串由数组中的每个元素的 toString() 返回值经调用 join() 方法连接（由逗号隔开）组成。
当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法
`Array.prototype.toLocaleString()`
返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 Object.prototype.toLocaleString() 方法。

`Array.prototype.indexOf()`
返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
```ecmascript 6
    //找出指定元素出现的所有位置
    var indices = [];
    var array = ['a', 'b', 'a', 'c', 'a', 'd'];
    var element = 'a';
    var idx = array.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = array.indexOf(element, idx + 1);
    }
    console.log(indices);
    // [0, 2, 4]
```
`Array.prototype.lastIndexOf()`
返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。


Iteration 方法

在下面的众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。在回调函数执行之前，数组的长度会被缓存在某个地方，所以，如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。此外，如果在回调函数中对当前数组进行了其它修改，比如改变某个元素的值或者删掉某个元素，那么随后的遍历操作可能会受到未预期的影响。总之，不要尝试在遍历过程中对原数组进行任何修改，虽然规范对这样的操作进行了详细的定义，但为了可读性和可维护性，请不要这样做。

`Array.prototype.forEach()`
为数组中的每个元素执行一次回调函数。
没有办法中止或者跳出 forEach 循环，除了抛出一个异常。如果你需要这样，使用forEach()方法是错误的，
**如果使用箭头函数表达式传入函数参数，thisArg 参数会被忽略，因为箭头函数在词法上绑定了this值。**
```ecmascript 6
    function logArrayElements(element, index, array) {
        console.log("a[" + index + "] = " + element);
    }
    [2, 5,"" ,9].forEach(logArrayElements);
    // a[0] = 2
    // a[1] = 5
    // a[2] = 
    // a[3] = 9
    //如果数组在迭代时被修改了，则其他元素会被跳过。
    var words = ["one", "two", "three", "four"];
    words.forEach(function(word) {
      console.log(word);
      if (word === "two") {
        words.shift();
      }
    });
    words//["two", "three", "four"]
```
`Array.prototype.entries()` 
返回一个数组迭代器对象，该迭代器会包含所有数组元素的键/值对。
```ecmascript 6
    var arr = ["a", "b", "c"];
    var iterator = arr.entries();    // undefined
    for (let e of iterator) {
        console.log(e);
    }
    // [0, "a"]
    // [1, "b"]
    // [2, "c"]
```
`Array.prototype.every()`
如果数组中的**每个元素**都满足测试函数，则返回 true，否则返回 false。
```ecmascript 6
    function isBigEnough(element,index,array){
      return (element>=10);
    }
    var a=[12,1,23,45].every(isBigEnough)    //false
```

`Array.prototype.some()`
如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。

`Array.prototype.filter()`
将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
```ecmascript 6
    function isBigEnough(value) {
      return value >= 10;
    }
    var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    filtered;        //    [12, 130, 44]     过滤，取其精华去其糟粕
    
    // ES6 way     
    const isBigEnough = value => value >= 10;    
    let [...spraed]= [12, 5, 8, 130, 44];        
    let filtered = spraed.filter(isBigEnough);
```
`Array.prototype.find()` 
找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
```ecmascript 6
    function isBigEnough(element) {
      return element >= 15;
    }                
    [12, 5, 8, 130, 44].find(isBigEnough); // 130  找到我的第一个意中人就结婚
    //用法：用对象的属性查找数组里的对象
```

`Array.prototype.findIndex()` 
找到第一个满足测试函数的元素并返回那个元素**的索引**，如果找不到，则返回 -1。

`Array.prototype.keys()` 
返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。
```ecmascript 6
    var arr = ["a", "b", "c"];
    var iterator = arr.keys();
    
    console.log(iterator.next()); 
    console.log(iterator.next()); 
    console.log(iterator.next()); 
    console.log(iterator.next()); 
    // Object {value: 0, done: false}
    // Object {value: 1, done: false}
    // Object {value: 2, done: false}
    // Object {value: undefined, done: true}
    
    //索引迭代器会包含那些没有对应元素的索引
    var arr = ["a", , "c"];
    var sparseKeys = Object.keys(arr);
    var denseKeys = [...arr.keys()];
    console.log(sparseKeys); // ['0', '2']
    console.log(denseKeys);  // [0, 1, 2]
```
`Array.prototype.map()`
创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
```ecmascript 6
let numbers = [1, 5, 10, 15];
let doubles = numbers.map((x) => {
   return x * 2;
});    
//反转字符串
var str = '12345';
Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join(''); 

```
`Array.prototype.reduce()`
从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
accumulator 初始值（或者上一次回调函数的返回值）
currentValue 当前元素值
currentIndex 当前索引
array 调用 reduce 的数组。
不提供 initialValue ，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。提供 initialValue ，从索引0开始。
 ```ecmascript 6
   [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
     return accumulator + currentValue;
   });

//将二维数组转化为一维
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]
// 计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```
 []

`Array.prototype.reduceRight()`
从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
`Array.prototype.values()` 
返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。


`Array.prototype[@@iterator]()` 
和上面的 values() 方法是同一个函数。
####求和
```javascript
var result = [1, 2, 3, 4, 5].reduce(function(prev, curr, index, array){
	console.log(arguments);
	return prev + curr;
});
console.log(result);
```

####map
```javascript
var result = [1, 2, 3, 4, 5].reduce(function(prev, curr, index, array){
	prev.push(curr * 2);
	return prev;
}, []);
console.log(result);

```
####filter
```javascript
var result = [1, 2, 3, 4, 5].reduce(function(prev, curr, index, array){
	curr % 2 == 0 && prev.push(curr);
	return prev;
}, []);
console.log(result);

```

####every
```javascript
var result = [0, 2, 4, 6, 8].reduce(function(prev, curr, index, array){
	return curr % 2 == 0 && prev;
}, true);
console.log(result);

```
####some
```javascript
var result = [10, 2, 4, 6, 8].reduce(function(prev, curr, index, array){
	return curr > 8 || prev;
}, false);
console.log(result);

```
####forEach
```javascript
var times2 = function(x) {
	return x * 2;
};
var times3 = function(x) {
	return x * 3;
};
var times4 = function(x) {
	return x * 4;
};

var flow = function(x) {
	return [].reduce.call(arguments, function(prev, curr) {
		return curr(prev);
	});
};
console.log(flow(2));
console.log(flow(2, times2));
console.log(flow(2, times2, times4));
console.log(flow(2, times2, times3, times4));

```
###去重
```javascript
var arr = [1, 3, 1, 'x', 'zz', 'x', false, false];
var result = arr.reduce(function(prev, curr, i, array) {
	var flag = prev.every(function(value) {
		return value !== curr;
	});
	flag && prev.push(curr);
	return prev;
}, []);
console.log(result);

var arr=[1,2,3,4,5,1,2,3];
var newArr = arr.reduce(function(prev,curr,index,array) {
    prev.indexOf(curr)>=0?'':prev.push(curr);
    return prev;
},[]);

```
参考链接：
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
