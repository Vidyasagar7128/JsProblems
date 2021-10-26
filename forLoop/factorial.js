var readlineSync = require('readline-sync');

var num = readlineSync.questionInt('please enter the number : ');
console.log("Entered number is : " + num);
var fact = 1;
for (var i = 1; i <= num; i++) {
    fact *= i;
}
console.log("factorial is : " + fact);