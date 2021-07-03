//ES6 Symbols in JavaScript

var symbol1 = Symbol();
var symbol2 = Symbol();
// Everytime symbol returns unique value

console.log(symbol1 === symbol2);

var symbol3 = Symbol.for('xyz');
var symbol4 = Symbol.for('xyz');
console.log(symbol3 === symbol4);

//Hiden property of Object implementation

let object = {};

object.name = 'JavaScript';
object.estd = 1995;

object[Symbol('Founder')] = 'Brendan Eich'; // hiden property

console.log(Object.keys(object));

// use of symbol
//Our own includes method in Array.prototype as same name as array.includes() but it will never conflickt

let includes = Symbol('Our own includes method');

Array.prototype[includes] = function (n) {
	return `We received ${n} from argument`;
};

let myArray = [1, 2, 3, 4];

console.log(myArray.includes(2));
console.log(myArray[includes](6));

let title = 'JavaScript';

console.log(title.search('Script'));
/* 
    Now,  the question is how this premitive type call search method ? as it is not object, it has not any own method or prototype then how it cLL SEARCH method?
     ==> step1: title ke new String('JavaScript") e convert kore
     step1: convert parameter into RegExp
     step3: RegExp er moddhe Symbol.search er implementation ase kina
*/

class Product {
	constructor(title) {
		this.title = title;
	}
	//Search implementation
	[Symbol.search](string) {
		return string.indexOf(this.title) >= 0 ? 'Found' : 'Not Found';
	}
}

var laptop = new Product('laptop');

console.log('Hp laptop'.search(laptop));
