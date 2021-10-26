var readlineSync = require('readline-sync');

var n = readlineSync.questionInt('please enter the number : ');
console.log("Entered number is : " + n);

for (var i = 2; i <= n; i++) {
    while (n % i == 0) {
        console.log(i + " ");
        n = n / i;
    }
}