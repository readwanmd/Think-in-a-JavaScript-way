let myFunc = function () {
	myFunc();
};

//Example: 1+2+3+4+5+6+7+8+9+..........+n

let n = 5;
let result = 0;
for (let i = 1; i <= n; i++) {
	result += i;
}

console.log(result);

//f(n-1) + n = f(n)

function sum(n) {
	if (n === 0) {
		return 0;
	} else {
		return sum(n - 1) + n;
	}
}

console.log(sum(4));
