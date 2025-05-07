var func = function (a, b, c) {
	console.log(this, a, b, c);
};

// no binding
//func(1, 2, 3); // Window{ ... } 1 2 3

// 명시적 binding
// func 안에 this에는 {x: 1}이 binding돼요
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6

var obj = {
	a: 1,
	method: function (x, y) {
		console.log(this.a, x, y);
	}
};

obj.method(2, 3); // 1 2 3
obj.method.call({ a: 4 }, 5, 6); // 4 5 6