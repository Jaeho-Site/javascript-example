// var obj1 = { //node 05.js
// 	outer: function() {
// 		console.log('THIS : ', this); // (1)
// 		var innerFunc = function() {
// 			console.log('THIS : ', this); // (2), (3)
// 		}
// 		innerFunc();

// 		var obj2 = {
// 			innerMethod: innerFunc
// 		};
// 		obj2.innerMethod();
// 	}
// };
// obj1.outer();

//--------------------------------------this 우회방법//
// var obj1 = {
// 	outer: function() {
// 		console.log(this); // (1) { outer: ƒ }

// 		// AS-IS
// 		var innerFunc1 = function() {
// 			console.log(this); // (2) 전역객체
// 		}
// 		innerFunc1();

// 		// TO-BE
// 		var self = this;
// 		var innerFunc2 = function() {
// 			console.log(self); // (3) { outer: ƒ }
// 		};
// 		innerFunc2();
// 	}
// };
// // 메서드 호출 부분
// obj1.outer();

var obj = {
	outer: function() {
		console.log(this); // (1) obj
		var innerFunc = () => {
			console.log(this); // (2) obj
		};
		innerFunc();
	}
}

obj.outer();