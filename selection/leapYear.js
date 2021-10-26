var readlineSync = require('readline-sync');

var year = readlineSync.question('please enter year : ');
console.log("Entered year is : " + year);

if (year % 400 == 0 || year % 4 == 0 || year % 100 == 0) {
    console.log(year + " is Leap year.")
} else {
    console.log(year + " is not Leap year.")
}