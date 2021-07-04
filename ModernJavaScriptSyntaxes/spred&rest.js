//Spread
let numbers = [1, 2, 3, 4, 5];

let a = [...numbers, 1, 2, 3];

console.log(a);

//Rest

let myFunction = (a, ...rest) => {
	console.log(a, rest);
};
myFunction(4, 5, 5.5, 97);
