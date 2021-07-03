{
	/*Rules for generator
    1. function name starrts with *
    2. here is used 'yield' to produve value
    3. 'return' is used as last call
    */
}

//Syntex of generator function
/*
    function* myGenerator(){}
    //or
    function * myGenerator(){}
    //or
    function *myGenerator(){}
    
    const myGenerator = function*(){}
    const myObject = {
        *myGenerator(){}
    }
    //or
    class myClass(){
        *myGenerator(){}
    }
*/

/*
function* generator() {
	yield 1;
	yield 2;
	return 'finished';
	yield 3;
	yield 4;
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

let object = {
	value1: 1,
	value2: 2,
};

//iterator implementation

/*
Object.prototype[Symbol.iterator] = function () {
	const entries = Object.entries(this);
	let count = entries.length;
	let index = 0;

	return {
		next() {
			if (count > 0) {
				let result = { done: false, value: entries[index][1] };
				count--;
				index++;
				return result;
			}
			return { done: true };
		},
	};
};
*/

// same example using generator

function* generator(obj) {
	const entries = Object.entries(obj);
	for (let element of entries) {
		yield element[1];
	}
}

const iterator = generator(object);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (let element of iterator) {
	console.log(element);
}
// console.log(...iterator);
