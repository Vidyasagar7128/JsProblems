var readlineSync = require('readline-sync');

var low = readlineSync.questionInt('please enter the start limit : ');
console.log("Entered low limit is : " + low);
var hi = readlineSync.questionInt('please enter the end limit : ');
console.log("Entered max limit is : " + hi);

var flag;
for (var num = low; num <= hi; num++) {
    flag = 0;
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log(num + " ");
    }
}