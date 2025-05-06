// var a = 1;
// var outer = function() {
// 	var inner = function() {
// 		console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
// 		//var a = 3;
// 	};
// 	inner();
// 	console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
// };
// outer();
// console.log(a);


// // CASE1 : 함수
// // 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미해요.
// var func = function (x) {
// 	console.log(this, x);
// };
// func(1); // Window { ... } 1

// // CASE2 : 메서드
// // 호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미해요.
// // obj는 곧 { method: f }를 의미하죠?
// var obj = {
// 	method: func,
// };
// obj.method(2); // { method: ƒ } 2

