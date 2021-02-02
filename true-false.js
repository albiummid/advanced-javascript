const age = 0;
const name = ""
let name1;
let name2 = null;
let name3 = NaN;
let name4 = [];
let name4 = "0"; 
let name5 = false
// false will be false but when  false in a "false" then it will be true.
// name 4 will be true because it is not a empty string though it contains 0;
// empty array refers to true.
// NaN will be false
// null will be false
// undefined values in a variables will be false.
// only 0 value in number refers to false .any value will be true.
// empty string "" refers to false in string value.

if(name){
    console.log("condition is true");
}
else{
    console.log('condition is false');
}