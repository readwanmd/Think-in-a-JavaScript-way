// Implicit Binding
// Explicit Binding
// new Binding
// window Binding

{
	/* Implicit Binding:  যেই যায়গায় অব্জেক্টের মেথড কল হবে সেই জায়গায় ডট নোটেশন আছে কিনা দেখতে হবে, থাকলে ডট নোটেশনের ইমিডিয়েট লেফ্টে যা থাকবে সেটাই ডিনোটf this করবে কে। */
}

var Sakib = {
	name: 'Sakib',
	age: 35,
	printName: function () {
		console.log(this.name);
	},
};

Sakib.printName();

var person = function (name, age) {
	return {
		name: name,
		age: age,
		printName: function () {
			console.log(this.name);
		},
		father: {
			name: 'Mr AnyBody',
			printName: function () {
				console.log(this.name);
			},
		},
	};
};

var readwan = person('readwan', 22);

readwan.printName();
readwan.father.printName();

{
	/* Explicit Binding */
}

var printName = function (v1, v2, v3) {
	console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
};

var readwan = {
	name: 'Readwan',
	age: 22,
};

var v1 = 'Handsome';
var v2 = 'All-Rounder';
var v3 = 'Best player';

printName.call(readwan, v1, v2, v3); // .call মেথড প্রথম পেরামিটারে নেয় একটা অব্জেক্ট যেটা this কে ডিনোট করে। আর পরবর্তী পেরামিটারে নেয় ফাংশনের প্রয়োজনীয় পেরামিটার।

var v = [v1, v2, v3];

printName.apply(readwan, v); // .call আর .apply সেইম কাজ করে। শুধুমাত্র .apply প্রথম অব্জেক্ট পেরামিটার নেওয়ার পর পরবর্তী পেরামিটারে ইন্ডিভিজুয়া ভাবে পেরামিটার না নিয়ে এর‍্যে আকারে নেয়।

var newFunc = printName.bind(readwan, v1, v2, v3); // .bind এক্সাক্টলি .call এর মতো শুধুমাত্র পার্থক্য হচ্ছে .bind ফাংশনটকে ডিরেক্ট কল না একটা ইন্সটেন্স রিটার্ন করে। সেই ইন্সটেন্স পরবর্তীতে প্রয়োজন অনুসারে কল করতে হবে।
newFunc();

{
	/* new Binding */
}

function newPerson(name, age) {
	this.name = name;
	this.age = age;
	console.log(`${this.name} is ${this.age} years old`);
}

var person = new newPerson('Nayeem', 18);

{
	/* window Binding */
}

var windowPrintName = function () {
	console.log(this.name);
};

var najneen = {
	name: 'Najneen',
};

windowPrintName();
