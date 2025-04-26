//일급 객체로써의 함수

const person={
    name:"John",
    age:30,
    greet: () => { //화살표 함수는 this를 바인딩하지않는다.
        console.log(`My name is ${this.name}, my age is${this.age}`); //undefined
    }
}
person.greet();

//함수를 인자로 전달할수있다.
function greet(name){
    console.log(`Hello,${name}`);
}
greet(person.name);

//함수를 배열에 저장할수있다.
const functions=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a*b;
    }
]

const result=functions[0](1,2);
console.log(result);
