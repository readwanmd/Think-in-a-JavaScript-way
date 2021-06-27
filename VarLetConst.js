function varFunc() {
    var varVariable = 'this is var'
    console.log(varVariable)
}

varFunc();

if(true){
    let letVariable = 'this is let'
    console.log(letVariable); //It works
}

// console.log(letVariable); //It could not work

//Final Word:
// var = Function scope
// let = Block scope
// const = Block scope