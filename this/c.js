// var obj1 = {
// 	outer: function() {
// 		console.log("1번 입니다"+this); // (1)
// 		var innerFunc = function() {
// 			console.log("2,3번 입니다"+this); // (2), (3)
// 		}
// 		innerFunc();

// 		var obj2 = {
// 			innerMethod: innerFunc
// 		};
// 		obj2.innerMethod();
// 	}
// };
// obj1.outer();


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
