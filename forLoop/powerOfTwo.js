var number = parseInt(process.argv[2]);

console.log("Entered number is : " + number);

var power = 1;
for (var i = 0; i <= number; i++) {
    console.log("2^" + i + "=" + power);
    power *= 2;
}