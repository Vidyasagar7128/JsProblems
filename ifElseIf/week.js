var readlineSync = require('readline-sync')

var number = readlineSync.question('Enter Day: ')
if (number == 1) {
    console.log("SUNDAY")
}
else if (number == 2) {
    console.log("MONDAY")
}
else if (number == 3) {
    console.log("TUESDAY")
}
else if (number == 4) {
    console.log("WEDNESDAY")
}
else if (number == 5) {
    console.log("THIRSDAY")
}
else if (number == 6) {
    console.log("FRIDAY")
}
else if (number == 7) {
    console.log("SATURDAY")
}
else {
    console.log('Enter Between 1 and 7')
}