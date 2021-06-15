// let pakhi;
// function add(num1,num2){
//     console.log(num1 + num2);
//     return
// }{
function add(num1,num2 =10){
    console.log(num1,num2);
    //output: 12 10
}
const result = add(12); 
console.log(result)//value is decleared but not defined because num 2 is not defined but it exist as default value

//output: undefined