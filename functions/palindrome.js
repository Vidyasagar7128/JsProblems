var readlineSync = require('readline-sync');

var num = readlineSync.questionInt('please enter the number : ');

var d;
var rev = 0;
var temp = num;
function palindromeNumber(num) {
    while (num > 0) {
        d = num % 10;
        rev = rev * 10 + d;
        num = parseInt(num / 10);
    }
    if (temp == rev)
        console.log("palindrome");
    else
        console.log("not palindrome");
}
palindromeNumber(num);