let person = {
	name: 'Readwan',
	age: 22,
	occupation: 'Student',
};

// for (item of person) {
// 	console.log(item);
// }
//
// Object is not itterable

{
	/*Rule1: Must have Symbol.iterator function property
	Rule2: Function Must have return iterator*/
}

/*

let array = ['apple', 'banana', 'mango'];
let iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

*/

{
	/* iterator Protocol
	1. Must be an object
	2. Must have to next method
	3. next method must have to return an object which contains atleast value & done where value could be anything and done willbe Boolean
	*/
}

//Example: our own iterator by following iterator protocol
/*
String.prototype[Symbol.iterator] = function () {
	let count = this.length;
	return {
		next() {
			if (count > 0) {
				count--;
				return {
					done: false,
					value:
						"Custom iterator, Never do this. this is just an example that shows we can change iterator's default behaviour.",
				};
			}
			return { done: true };
		},
	};
};

console.log([...'Bangladesh']);
*/

// example 2:
function range(start, end, step) {
	let current = start;
	return {
		[Symbol.iterator]: function () {
			return {
				next() {
					let result;
					if (current <= end) {
						result = {
							done: false,
							value: current,
						};
						current += step;
						return result;
					}
					return { done: true };
				},
			};
		},
	};
}

console.log([...range(1, 2000000, 2)][99]);
