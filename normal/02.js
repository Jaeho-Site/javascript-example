function a (x) {
	console.log(x);
	var x;
	console.log(x);
	var x = 2;
	console.log(x);
}
a(1);

function a () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	function b() { }
	console.log(b);
}
a();


//node 02.js


