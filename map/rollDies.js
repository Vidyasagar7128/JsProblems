var rollMap = new Map();
var diece = 0;
for (let i = 1; i <= 6; i++) {
    rollMap.set(i, 0);
}
var min = Number.MIN_VALUE;
var j = 1;
while (j <= 50) {
    diece = Math.floor(Math.random() * 6) + 1;
    rollMap.set(diece, rollMap.get(diece) + 1);
    j++;

    if (rollMap.get(diece) >= 10) {
        console.log("index : " + diece + " reached 10 times.")
        break;
    }
}
console.log(rollMap);