// let x=1;
// console.log(this.x);
// console.log(this);
// console.log(this === global);
// console.log(this === window); 

// function func(){
//   let x=2;
//   console.log(this.x);
//   return 'a';
// }

// const func2 = () => {
//   let x=3;
//   console.log(this.x);
//   console.log('a2');
//   return 'a2';
// }

// console.log(func())

let x = 0;

const obj = {
  x: 1,
  func: function () {
    console.log("func (일반 함수):", this.x);
    return 'a';
  },
  func2: () => {
    console.log("func2 (화살표 함수):", this.x);
    return 'a2';
  }
};

obj.func();
obj.func2();
