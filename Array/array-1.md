Array.prototype.indexOf()
Array.prototype.lastIndexOf()
Array.prototype.every()
Array.prototype.some()
Array.prototype.forEach()
Array.prototype.map()
Array.prototype.filter()
Array.prototype.reduce()
Array.prototype.reduceRight()

###求和
```javascript
var result = [1, 2, 3, 4, 5].reduce(function(prev, curr, index, array){
	console.log(arguments);
	return prev + curr;
});
console.log(result);
```

###map
```javascript
var result = [1, 2, 3, 4, 5].reduce(function(prev, curr, index, array){
	prev.push(curr * 2);
	return prev;
}, []);
console.log(result);

```
###filter
```javascript
var result = [1, 2, 3, 4, 5].reduce(function(prev, curr, index, array){
	curr % 2 == 0 && prev.push(curr);
	return prev;
}, []);
console.log(result);

```

###every
```javascript
var result = [0, 2, 4, 6, 8].reduce(function(prev, curr, index, array){
	return curr % 2 == 0 && prev;
}, true);
console.log(result);

```
###some
```javascript
var result = [10, 2, 4, 6, 8].reduce(function(prev, curr, index, array){
	return curr > 8 || prev;
}, false);
console.log(result);

```
###forEach
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
