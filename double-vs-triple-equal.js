// var fileName = double-vs-triple-equal
const first = 2;
const second = "2";
// if(first == second){
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// if i use double equal it is only check values. but if i use three equals then it's also compared with types.
// so third equal should be use when we have to compare with variables types.
// even 1 is compared to true and 0 is compared is false.....here false=0 and true = 1;