// // 별도 지정 없음 : 전역객체
// setTimeout(function () { console.log(this) }, 300);

// // 별도 지정 없음 : 전역객체
// [1, 2, 3, 4, 5].forEach(function(x) {
// 	console.log(this, x);
// });

// // addListener 안에서의 this는 항상 호출한 주체의 element를 return하도록 설계되었음
// // 따라서 this는 button을 의미함
// document.body.innerHTML += '<button id="a">클릭</button>';
// document.body.querySelector('#a').addEventListener('click', function(e) {
// 	console.log(this, e);
// });

var Cat = function (name, age) {
	this.bark = '야옹';
	this.name = name;
	this.age = age;
};

var choco = new Cat('초코', 7); //this : choco
var nabi = new Cat('나비', 5);  //this : nabi