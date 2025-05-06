// ---- 1번
var a = 1;
function outer() {
	function inner() {
		console.log(`inner 내부 ${a}`); //undefined
		var a = 3;
	}
	inner(); // ---- 2번
	console.log(`inner 호출 ${a}`);
}
outer(); // ---- 3번
console.log(a);
function a () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	var b=function b() { }
	console.log(b);
}
a();

console.log(sum(1, 2));

function sum (a, b) { // 함수 선언문 sum
	return a + b;
}

var multiply = function (a, b) { // 함수 표현식 multiply
	return a + b;
}

console.log(multiply(3, 4));