const name = "nbc"
const age = "30"

let obj0 = {
	name,
	age: 3
}
//console.log(obj.name, obj.age)

let user = {name: "nbc", age: 30};
let newArr = [...user, 4];//error
//console.log(newArr)

'use strict';

let x = 0;
globalThis.x = 100; // 전역 객체에 x 명시적으로 설정

const obj = {
  x: 1,
  func: function () {
    console.log("func (일반 함수):", this.x); // this → obj
  },
  func2: () => {
    console.log("func2 (화살표 함수):", this.x); // this → 상위 스코프 (전역)
  }
};

obj.func();   // 출력: 1
obj.func2();  // 출력: 100 (또는 undefined if globalThis.x not set)