console.log('Prototype');

// JS এর যেকোন ফাংশনের একটা property হচ্ছে prototype যেটা একটা object-কে point করে।

// let person = {};

// person.name = 'Readwan';
// person.age = '22';

// person.eat = function () {
// 	console.log(`person is eating.`);
// };
// person.sleep = function () {
// 	console.log(`person is sleeping.`);
// };

// function Person(name, age) {
// 	// let person = Object.create(Person.prototype);

// 	this.name = name;
// 	this.age = age;

// 	// return person;
// }

// Person.prototype = {
// 	eat() {
// 		console.log(`Person is eating.`);
// 	},
// 	sleep() {
// 		console.log(`Person is sleeping.`);
// 	},
// 	play() {
// 		console.log(`Person is playing.`);
// 	},
// };

// const Readwan = new Person('Readwan', 22);
// const Hasib = new Person('Hasib', 12);

// Hasib.play();

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	eat() {
		console.log(`Person is eating.`);
	}
	sleep() {
		console.log(`Person is sleeping.`);
	}
	play() {
		console.log(`Person is playing.`);
	}
}

const Readwan = new Person('Readwan', 22);
const Hasib = new Person('Hasib', 12);

Hasib.play();
console.log(Hasib);
