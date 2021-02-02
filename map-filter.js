const numbers = [3,4,5,6,7,8]



// old way
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }



// using map
// const result = numbers.map(function (element){
//     return element * element;
//     })
// console.log(result);



// using arrow function
// const square = element => element * element;
// const square1 = x => x * x;



// using arrow in a map
// const result = numbers.map(x => x * x);

// const bigger = numbers.filter(x => x < 5 );
// filter is used for adding condition in map function
// console.log(bigger);

// find function...........
// const isThere = numbers.find(x => x>5);
// console.log(isThere);

// find is used for recognize first matching element from a array and on the other hand filter is used for recognize all matching element from array by a condition.

// using filter,arrow,map .
// const filter = numbers.filter(x => x > 4);
// const result = filter.map(x => x * x);
// console.log(result);

// 1 line code....
// const result = numbers.filter(x => x > 4).map(x => x * x);
// console.log(result);
// arrow and map help us to compact coding.

// i am want to recongnize first odd number which is greater than 3;
const result = numbers.find(x => x > 3 && x%2 != 0);
console.log(result);
