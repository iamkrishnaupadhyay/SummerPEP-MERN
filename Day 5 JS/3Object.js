const obj1=new Object();
const obj2={};
const obj={
    name:"Krishna",
    "age":40,
    10:"Ten",
    "City":"Jaipur"
}

obj1.name="Krishna";
obj2.name="Aka";

console.log(obj1);
console.log(obj2);
console.log(obj)

const input=prompt();
console.log(obj[input])