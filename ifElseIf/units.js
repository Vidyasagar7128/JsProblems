var readlineSync = require('readline-sync')

var number = readlineSync.question('Enter Number: ')
if (number.length == 1) {
    console.log("UNIT")
}
else if (number.length == 2) {
    console.log("TEN")
}
else if (number.length == 3) {
    console.log("HUNDRED")
}
else if (number.length == 4) {
    console.log("THOUSAND")
}
else if (number.length == 5) {
    console.log("TEN THOUSAND")
}
else if (number.length == 6) {
    console.log("LACK")
}
else if (number.length == 7) {
    console.log("TEN lACK")
}
else if (number.length == 8) {
    console.log("CRORE")
}
else if (number.length == 9) {
    console.log("TEN CRORE")
}
else {
    console.log('Try Again!')
}