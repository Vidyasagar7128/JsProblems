const numbers = [];
for (var i = 0; i < 5; i++) {
    var rand = Math.floor(Math.random() * 899) + 100;
    numbers[i] = rand
}
numbers.sort()
console.log("Min: ", numbers[0])
console.log("Max: ", numbers[numbers.length - 1])




