const arr = ["Milo", "Otis", "Garfield"];

const append = arr;
const prepend = arr;
const removeLast = arr;
const removeFirst = arr;

append.push("Odie");
console.log(append);
console.log(arr);
prepend.unshift("Odie");
console.log(prepend);
console.log(arr);
removeLast.pop();
console.log(removeLast);
console.log(arr);
removeFirst.shift();
console.log(removeFirst);
console.log(arr);