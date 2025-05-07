// const obj={
//     0:'a',
//     1:'b',
//     2:'c',
//     length:3
// };

// Array.prototype.push.call(obj,'d');
// console.log(obj); 

// Array.prototype.forEach.call(obj, (item, index) => {
//     console.log(item, index);
// });

// let arr=Array.from(obj);
// console.log(arr); // ['a', 'b', 'c', 'd']

//----------------------------------------------------//

// var numbers = [10, 20, 3, 16, 45];
// var max = Math.max.apply(null, numbers);
// var min = Math.min.apply(null, numbers);
// console.log(max, min);

const numbers = [10, 20, 3, 16, 45];

const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min);

function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const user = { name: 'Alice' };
greet.call(user); // Hello, my name is Alice