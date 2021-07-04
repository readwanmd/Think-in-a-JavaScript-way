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

//Example: 2
function* range(start, end, step) {
	let current = start;
	while (current <= end) {
		yield current;
		current += step;
	}
}

let iterator1 = range(1, 1000, 2);
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// Control Flow of generator
function* generator1(a, b) {
	let k = yield a + b;
	let m = yield a + b + k;

	yield a + b + k + m;
}

let genn = generator1(10, 20);
console.log(genn.next());
console.log(genn.next(50));
console.log(genn.next(100));

//async/await & generator

const takeOrder = (customer) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Order taken from ${customer}`);
		}, 1000);
	});
};

const processOrder = (customer) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Order processed for ${customer}`);
		}, 2000);
	});
};

const completeOrder = (customer) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Order complete for ${customer}`);
		}, 1000);
	});
};

async function* solution(customer) {
	yield await takeOrder(customer);
	yield await processOrder(customer);
	yield await completeOrder(customer);
}

let sltn = solution('Readwan');

// sltn.next().then(({ value }) => console.log(value));
// sltn.next().then(({ value }) => console.log(value));
// sltn.next().then(({ value }) => console.log(value));

const promises = [sltn.next(), sltn.next(), sltn.next()];

(async function () {
	for await (p of promises) {
		console.log(p);
	}
})();

//async iterator
const myAsyncIterable = {
	async *[Symbol.asyncIterator]() {
		yield 'hello';
		yield 'async';
		yield 'iterator';
	},
};

(async () => {
	for await (x of myAsyncIterable) {
		console.log(x);
	}
})();
