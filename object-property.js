const students = [
    {id:21 , name: "Omar Sunny"},
    {id:31 , name: "Mannaaaaaaaaaa"},
    {id:41 , name: "Purnima"},
    {id:51 , name: "DeepJol"}
];
// i have to find name from the elements and push them to a array--ownWork
// const nameList = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const name = element.name;
//     nameList.push(name);
// }
// console.log(nameList);

// compact way 
const names = students.map(s => s.name)
const ids = students.map(s => s.id)
const ids2 = students.filter(s=> s.id > 40)
const ids3 = students.find(s=> s.id > 40)
console.log(ids3);