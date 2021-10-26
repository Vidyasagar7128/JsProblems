var readlineSync = require('readline-sync');

var n = readlineSync.questionInt('please enter the number : ');
console.log("Entered number is : " + n);
var arr = new Array();

for (var i = 2; i <= n; i++) {
    while (n % i == 0) {
        arr[i] = i
        n = n / i;
    }
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
/////////////Incomplete