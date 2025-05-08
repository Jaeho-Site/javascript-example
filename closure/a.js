// const x = 1;

// // innerFunc()에서는 outerFunc()의 x에 접근할 수 없죠.
// // Lexical Scope를 따르는 프로그래밍 언어이기 때문
// function outerFunc() {
//   const x = 10;
//   innerFunc(); // 1
// }

// function innerFunc() {
//   console.log(x); // 1
// }

// outerFunc();

// const x = 1;

// // 1
// function outer() {
//   const x = 10;
//   const inner = function () {
//     console.log(x);
//   };
//   return inner;
// }

// const innerFunc = outer();
// innerFunc();


// 카운트 상태 변경 함수 #3
const increase = (function () {
    // 카운트 상태 변수
    let num = 0;
  
    // 클로저
    return function () {
      return ++num;
    };
  })();
  
  // 이전 상태값을 유지
  console.log(increase()); //1
  console.log(increase()); //2
  console.log(increase()); //3