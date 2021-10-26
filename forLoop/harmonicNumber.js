var num = parseInt(process.argv[2]);
console.log("Entered number is : " + num);
var sum = 1;
for (var i = 1; i <= num; i++) {
    sum += 1 / i;
    console.log("sum is : " + sum);
}