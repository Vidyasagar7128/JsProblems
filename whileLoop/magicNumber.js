var readlineSync = require('readline-sync');

var first = 0;
var last = 100;
var mid;
var flag = false;
while (flag == false) {
    mid = parseInt((first + last) / 2);
    console.log(mid);
    var choice = readlineSync.questionInt('1.less\n2.greater\n3.this\nplease enter the Your choice : ');
    if (choice == 1) {
        last = mid - 1;
    }
    if (choice == 2) {
        first = mid + 1;
    }
    if (choice == 3) {
        console.log("your magic number is : " + mid);
        flag = true;
    }
}