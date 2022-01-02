//Factorial of a number

const num = parseInt(prompt("Enter Number"));
if (num < 0) {
console.log("Negative Number");
}
else if (num == 0) {
console.log("0");
}
else {
    var fact = 1;
    for ( var i = 1; i <= num; i++) {
        fact =fact * i;
        console.log( fact);    
    }
    
}