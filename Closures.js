// var num1 = 2;
// var num2 = 3;

// function sum(){
//     return num1 + num2;
// }

// console.dir(sum); //It will carry global scope

// var num1 = 2; //global

// function sum(){
// var num2 = 3; //closure

//     return function () {
//         return num1 + num2;
//     }
// }
// var myFunc = sum();
// console.dir(myFunc); //It will carry global scope as well as closure

//UseCase of closure

// function bankAccount(innitialBalance){
//     var balence = innitialBalance; //closure

//     return function(){
//         return balence;
//     }
// }

// var account = bankAccount(100000);

// console.log(account());
// console.dir(account);
// console.log(balence); //Not accessible

// function stopWatch() {
// 	var startTime = Date.now();

// 	function getDelay() {
// 		console.log(Date.now() - startTime);
// 	}

// 	return getDelay;
// }

// var timer = stopWatch();

// //fake delay
// for (var i = 0; i < 100000000; i++) {
// 	var a = Math.random() * 100;
// 	// console.log(i);
// }

// timer();
// console.dir(timer);
