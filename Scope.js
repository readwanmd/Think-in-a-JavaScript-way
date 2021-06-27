//parent er dunia(scope)
var x = 25;

function myFunc() {
    //myFunc() er dunia(scope)
    var y = 10;

    console.log(`${x} from myFunc`);

}

console.log(x);
myFunc();