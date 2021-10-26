const twice = [];
var count = 0
for (let i = 0; i <= 100; i++) {
    if (i == 11 || i == 22 || i == 33 || i == 44 || i == 55 || i == 66 || i == 77 || i == 88 || i == 99) {
        twice[count] = i
        count++
    }
}
for (let i = 0; i < twice.length; i++) {
    console.log("Numbers: ", twice[i])
}