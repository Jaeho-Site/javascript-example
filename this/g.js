// var func = function (a, b, c, d) {
// 	console.log(this, a, b, c, d);
// };
// func(1, 2, 3, 4); // window객체

// // 함수에 this 미리 적용
// var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
// bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// // 부분 적용 함수 구현
// var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
// bindFunc2(6, 7); // { x: 1 } 4 5 6 7
// bindFunc2(8, 9); // { x: 1 } 4 5 8 9

// var func = function (a, b, c, d) {
// 	console.log(this, a, b, c, d);
// };
// var bindFunc = func.bind({ x:1 }, 4, 5);

// // func와 bindFunc의 name 프로퍼티의 차이를 살펴보세요!
// console.log(func.name); // func
// console.log(bindFunc.name); // bound func

// var obj = {
// 	outer: function() {
// 		console.log(this); // obj
// 		var innerFunc = function () {
// 			console.log(this);
// 		};

// 		// call을 이용해서 즉시실행하면서 this를 넘겨주었습니다
// 		innerFunc.call(this); // obj
// 	}
// };
// obj.outer();

// var obj = {
// 	outer: function() {
// 		console.log(this);
// 		var innerFunc = function () {
// 			console.log(this);
// 		}.bind(this); // innerFunc에 this를 결합한 새로운 함수를 할당
// 		innerFunc();
// 	}
// };
// obj.outer();

var obj = {
	logThis: function () {
		console.log(this);
	},
	logThisLater1: function () {
		// 0.5초를 기다렸다가 출력해요. 정상동작하지 않아요.
		// 콜백함수도 함수이기 때문에 this를 bind해주지 않아서 잃어버렸어요!(유실)
		setTimeout(this.logThis, 500);
	},
	logThisLater2: function () {
		// 1초를 기다렸다가 출력해요. 정상동작해요.
		// 콜백함수에 this를 bind 해주었기 때문이죠.
		setTimeout(this.logThis.bind(this), 1000);
	}
};

obj.logThisLater1();
obj.logThisLater2();
