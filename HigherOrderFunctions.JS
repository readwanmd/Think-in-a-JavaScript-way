console.log('Higher Order Functions');

// Higher Order Functions: হয় পেরামিটার হিসাবে একটা ফাংশন নিবে নয়তো একটা ফাংশন রিটার্ন করবে বা দুইটাই করবে।

function hello() {
	return function () {
		console.log('Hello World!');
	};
}

hello()();

// Example 1: without higher order function

// var nums = [1, 2, 3, 4, 5];

// var result = [];

// for (let i = 0; i < nums.length; i++) {
// 	const num = nums[i];
// 	result.push(num * 2);
// }

// console.log(result);

// Example 1: with higher order function

// var nums = [2, 3, 4, 5, 6];

// var result = nums.map((num) => {
// 	return num * 2;
// });

// console.log(result);

//Example 2: without higher order function
// var players = [
// 	{
// 		name: 'Sakib',
// 		avg: 38.25,
// 	},
// 	{
// 		name: 'Tamim',
// 		avg: 37.5,
// 	},
// 	{
// 		name: 'Liton',
// 		avg: 31.8,
// 	},
// ];

// var playersWithAvg37 = [];

// for (let i = 0; i < players.length; i++) {
// 	const player = players[i];
// 	if (player.avg >= 37) {
// 		playersWithAvg37.push(player);
// 	}
// }

// console.log(playersWithAvg37);

//Example 2: with higher order function

// var playersWithAvg37 = players.filter((player) => player.avg >= 37);

// console.log(playersWithAvg37);

//Example 3: array.mep() built by me

let characters = ['Aaaaaaaaaaaa', 'Bbbb', 'Cccccccc', 'Ddddddddddddddd', 'Ee'];

function mapByReadwan(arr, func) {
	const newArray = [];

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		newArray.push(func(element));
	}

	return newArray;
}

console.log(
	mapByReadwan(characters, function (character) {
		return character.length;
	})
);
