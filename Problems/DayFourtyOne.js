var prompt = require('prompt-sync')();

const numbers = [];

var count = 0
for (var i = 0; i < 10; i++) {
    var rand = Math.floor(Math.random() * 900) + 100;
    numbers[i] = rand
}
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            var temp = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = temp
        }
    }
}
for (let i = 0; i < numbers.length; i++) {
    console.log("Sorted Array: ", numbers[i])
}
console.log("2nd Min: ", numbers[2], "2nd Max: ", numbers[numbers.length - 2])
///11,22,33,44,55,66,77,88,99
const twice = [];
for (let i = 0; i <= 100; i++) {
    if (i == 11 || i == 22 || i == 33 || i == 44 || i == 55 || i == 66 || i == 77 || i == 88 || i == 99) {
        twice[count] = i
        count++
    }
}
for (let i = 0; i < twice.length; i++) {
    console.log("Numbers: ", twice[i])
}
/////////////////////////////////////////
var count = {}
var times = 0;
while (true) {
    var dies = Math.floor(Math.random() * 6) + 1
    console.log("Dies:", dies)
}
console.log("Counts Keys: ", Object.keys(count))
console.log("Counts Values: ", Object.values(count))
//////////////////////////////////////////
var n = prompt('How many more times? ');
console.log(n)
