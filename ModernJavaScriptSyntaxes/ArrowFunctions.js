/*
let number = () => {
	return 10;
};

console.log(number());

let number1 = (n) => {
	return n;
};

console.log(number1(12));
*/

var javascript = {
	name: 'javascript',
	libraries: ['React', 'Vue'],
	printLibraries: function () {
		this.libraries.forEach((a) => {
			console.log(`${this.name} loves ${a}`);
		});
	},
};

javascript.printLibraries();
