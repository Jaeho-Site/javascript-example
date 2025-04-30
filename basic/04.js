//일급객체로서의 함수

//변수에 함수를 할당할수있다.

function callFunction(func){
    func();
}
const sayHello=function(){
    console.log("Hello");
}
callFunction(sayHello);

//함수를 반환할수있다.
function createCounter(num){
    return function(count){
        return num+count;
    }
}
const counter=createCounter(1)(2);
console.log(counter);

function createAdder(num){
    return function(x){
        return x+num;
    }
}

const add5=createAdder(5);
console.log(add5(10));
