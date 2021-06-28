// console.log('PrototypeInheritance&ES6Class.JS');

// function Person(name, age) {
// 	//parent class
// 	this.name = name;
// 	this.age = age;
// }

// function Cricketer(name, age, type, country) {
// 	//subclass
// 	Person.call(this);
// 	this.name = name;
// 	this.age = age;
// 	this.type = type;
// 	this.country = country;
// }

// Person.prototype = {
// 	eat: function () {
// 		console.log(`${this.name} is eating.`);
// 	},
// };

// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;
// Cricketer.prototype.Play = function () {
// 	console.log(`${this.name} is playing.`);
// };

// let Sakib = new Cricketer('Sakib', 35, 'All rounder', 'Bangladesh');

// Sakib.Play();

/* Prototype chain */

// Object.prototype.readwan = function () {
// 	console.log(`I'm Readwan.`);
// };

// let p = {};

// p.readwan();

// //Using class
// class person {
// 	//parent class
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	eat() {
// 		console.log(`${this.name} is eating.`);
// 	}
// }

// class cricketer extends person {
// 	//sub class
// 	constructor(name, age, type, country) {
// 		super(name, age);

// 		this.name = name;
// 		this.age = age;
// 		this.type = type;
// 		this.country = country;
// 	}
// 	player() {
// 		console.log(`${this.name} is ${this.country}i ${this.type}.`);
// 	}
// }

// let Sakib = new cricketer('Sakkib', 35, 'All rounder', 'Bangladesh');

// Sakib.player();

//getter & setter
class person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		console.log(`${this.name} is eating.`);
	}

	//getter
	get getName() {
		return this.name;
	}
	//setter
	set setName(name) {
		this.name = name;
	}
}

let readwan = new person('Readwan', 22);
console.log(`${readwan.getName} - from getter`);

readwan.setName = 'Haasib';

console.log(`${readwan.getName} - after setter call`);
