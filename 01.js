// **변수 이름 :** 저장된 값의 고유 이름
// **변수 값 :** 변수에 저장된 값
// **변수 할당 :** 변수에 값을 저장하는 행위
// **변수 선언 :** 변수를 사용하기 위해 컴퓨터에 알리는 행위
// **변수 참조 :** 변수에 할당된 값을 읽어오는것

// var로 변수 선언
var myVar = "Hello World";
var myVar = "World"; //덮어쓰기 가능
console.log(myVar); // "Hello World"

// let으로 변수 선언
let myLet = "Hello World";
myLet = "World"; // 선언만 다시안하면 덮어쓰기 가능
console.log(myLet); // "Hello World"

// const로 상수 선언
const myConst = "Hello World";
// myConst = "World"; // 오류 발생
console.log(myConst); // "Hello World"

//------------------------------------------------------//
//정수형 숫자(number)
let num1 = 10;
console.log(num1); // 10
console.log(typeof num1); // "number"

//실수형 숫자(float)
let num2 = 10.5;
console.log(num2); // 10.5
console.log(typeof num2); // "number"

//지수형 숫자
let num3 = 1.23e-3;
console.log(num3); // 0.00123
console.log(typeof num3); // "number"

//NAN(Not a Number)
let num4 = "Hello" / 2;
console.log(num4); // NaN
console.log(typeof num4); // "number"

//Infinity
let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // "number"

//Infinity
let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num6); // "number"

//------------------------------------------------------//



