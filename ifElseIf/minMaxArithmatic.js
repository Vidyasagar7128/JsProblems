var readlineSync = require('readline-sync')

var a = readlineSync.question('Enter a Value: ')
var b = readlineSync.question('Enter b Value: ')
var c = readlineSync.question('Enter c Value: ')
var one = Number(a) + Number(b) * Number(c)
var two = Number(a) % Number(b) + Number(c)
var three = Number(c) + Number(a) / Number(b)
var four = Number(a) * Number(b) + Number(c)
console.log(`one: ${one} two: ${two} three: ${three} four: ${four}`)

//Maximum value
if (one > two && one > three && one > four) {
    console.log(one)
}
else if (two > one && two > three && two > four) {
    console.log(two)
}
else if (three > one && three > two && three > four) {
    console.log(three)
}
else {
    console.log(four)
}
//Minimum value
if (one < two && one < three && one < four) {
    console.log(one)
}
else if (two < one && two < three && two < four) {
    console.log(two)
}
else if (three < one && three < two && three < four) {
    console.log(three)
}
else {
    console.log(four)
}
