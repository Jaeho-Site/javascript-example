//Map,Set

const myMap=new Map();

myMap.set("one",1);
myMap.set("two",2);
myMap.set("three",3);

console.log(myMap.keys());
console.log(myMap.values());

for (const key of myMap.keys()){
    console.log(key);
}

for (const value of myMap.values()){
    console.log(value);
}

for (const entry of myMap.entries()){
    console.log(entry);
}

console.log(myMap.size);
console.log(myMap.has("one"));

//---------------------------------------------
//값 추가,검색,삭제,모든값제거,존재여부확인

const mySet=new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

for (const value of mySet.values()){
    console.log(value);
}



















