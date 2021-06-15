const nums = [1,2,3,4,5,6,7,8]
const part = nums.slice(2,5)
// from 2 to before 5
// slice is used for separates elements from parents for temporary,.
const removed = nums.splice(2,5,77,99,88);
// after declearing position , we can inject some elements on thats place.
// splice is used for showing removed element . and it is parmanetly remove

// console.log(removed);
// console.log(nums);
const together = nums.join(" ami ")
// join method is used for converting an array to a string .and value putted on the gap of elements.
console.log(together);

