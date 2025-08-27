
const mysym =  Symbol("key1"); // creating symbol
const jsuser = {
    name: "John",
    [mysym]: "key1",
    age: 24,
    company: "Google",
    email:"nischalggogle.com"
}
// console.log( jsuser.name);  // access simple type
// console.log(jsuser ["name"]); // access good and advance type 
// console.log( jsuser[mysym]);

jsuser.email = "nischal744dotcom";
// Object.freeze(jsuser) // adding new key value pair

jsuser.email = "xgemffytdotcom";
// console.log(jsuser);
 // update existing key value pair



 jsuser.greeting = function(){
    console.log("Hello John");
 }
 console.log(jsuser.greeting());
 