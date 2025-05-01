//명시적 this 바인딩
//call,apply,bind

// var func = function (a, b, c) {
// 	console.log(this, a, b, c);
// };

// func.call({ x: 1 }, 4, 5, 6);
// func.apply({ x: 1 }, [4, 5, 6]);

//--------------------------------------//
// var obj = {
// 	a: 1,
// 	method: function (x, y) {
// 		console.log(this.a, x, y);
// 	}
// };

// obj.method(2, 3); // 1 2 3
// obj.method.call({ a: 4 }, 5, 6); // 4 5 6

var obj = {
	outer: function() {
		console.log(this);
		var innerFunc = function () {
			console.log(this);
		}.bind(this); // innerFunc에 this를 결합한 새로운 함수를 할당
		innerFunc();
	}
};
obj.outer();