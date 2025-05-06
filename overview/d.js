const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);
myMap.set(400, 4);
myMap.set('50', 5);

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);

const arr2=[...arr,7,8,9];
arr=arr2;
console.log(arr);

const ms=new Set();
ms.add(1);
ms.add(2);
ms.add(3);
ms.add(2);

for (const value of ms) {
  console.log(value);
}