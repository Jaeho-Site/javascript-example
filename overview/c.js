const sayHello1 = function () {
    console.log('Hello!');
};

sayHello1(); // "Hello!" 출력

const sayHello2 = () => {
    console.log('Hello!22');
};

sayHello2(); // "Hello!" 출력

function callFunction(func) {
    func();
  }

  const sayHello = function() {
    console.log('Hello!');
  };

  callFunction(sayHello); // "Hello!" 출력
function createAdder(num) {
    return function(x) {
      return x + num;
    }
  }

  const addFive = createAdder(5);
  console.log(addFive(10)); // 15 출력
const person = {
    name: 'John',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
    sh: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.sayHello(); // "Hello, my name is John" 출력
person.sh(); // "Hello, my name is undefined" 출력

const arr=[function(a,b){return a+b},function(a,b){return a-b}];
console.log(arr[0](1,2)); // 3
console.log(arr[1](1,2)); // -1 