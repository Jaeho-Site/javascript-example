var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); //var a가 호이스팅되기때문에 undefined가 나옴
		var a = 3;
	};
	inner();
	console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a);

var a = 100;
var outer = function() {
	var inner = function() {
		console.log(a); // inner스코프안에 a가 없고, outer에도 a가 없어서 거슬러 올라가 전역변수 a가 나옴
		//var a = 3;
	};
	inner();
	console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a);


//node 03.js

