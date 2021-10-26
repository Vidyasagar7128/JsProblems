var readlineSync = require('readline-sync')

var num = readlineSync.question('Enter Number: ')
var flag = 0;
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        flag = flag + 1;
        console.log(flag)
    }
}
if (num == 0) {
    console.log("number is not Prime nor Pomposite");
} else {
    if (flag == 2)
        console.log("prime");
    else
        console.log("not prime");
}