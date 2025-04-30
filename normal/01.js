let a=2;
let b="2";

let user={
    name:"John",
    age:20,
    city:"New York"
}
function copyUser(user,newName){
    let newUser={
        name:newName,
        age:user.age,
        city:user.city
    }
    return newUser;
}

let user2=copyUser(user,"John2");
console.log(user);
console.log(user2);



console.log(a==b);




//node 01.js