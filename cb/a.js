// // Array.prototype.map을 직접 구현해봤어요!
// Array.prototype.mapaaa = function (callback, thisArg) {
//     var mappedArr = [];
  
//     for (var i = 0; i < this.length; i++) {
//       // call의 첫 번째 인자는 thisArg가 존재하는 경우는 그 객체, 없으면 전역객체
//       // call의 두 번째 인자는 this가 배열일 것(호출의 주체가 배열)이므로,
//           // i번째 요소를 넣어서 인자로 전달
//       var mappedValue = callback.call(thisArg || global, this[i]);
//       mappedArr[i] = mappedValue;
//     }
//     return mappedArr;
//   };
  
//   const a = [1, 2, 3].mapaaa((item) => {
//     return item * 2;
//   });
  
//   console.log(a);

Array.prototype.mapaaa = function (callback, thisArg) {
    var mappedArr = [];
  
    for (var i = 0; i < this.length; i++) {
      var mappedValue = callback.call(thisArg || globalThis, this[i]);
      mappedArr[i] = mappedValue;
    }
  
    return mappedArr;
  };
  
  const multiplier = {
    factor: 10,
    multiply(n) {
      return n * this.factor;
    }
  };
  
  const numbers = [1, 2, 3];
  
  // thisArg로 multiplier 객체를 전달
  const result = numbers.mapaaa(function (item) {
    return this.multiply(item); // this === multiplier
  }, multiplier);
  
  console.log(result); // [10, 20, 30]
  

  //--------------------------------------------//
  var obj1 = {
    name: 'obj1',
    func: function () {
      console.log(this.name);
    }
  };
  //함수 자체를 obj1에 바인딩
  //obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
  setTimeout(obj1.func.bind(obj1), 1000);
  
  var obj2 = { name: 'obj2' };
  //함수 자체를 obj2에 바인딩
  //obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
  setTimeout(obj1.func.bind(obj2), 1500);