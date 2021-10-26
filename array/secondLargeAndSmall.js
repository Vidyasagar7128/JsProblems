const numbers = [];

var count = 0
for (var i = 0; i < 10; i++) {
    var rand = Math.floor(Math.random() * 900) + 100;
    numbers[i] = rand
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
console.log("2nd Min: ", numbers[1], "2nd Max: ", numbers[numbers.length - 2])