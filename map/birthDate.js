var monthMap = new Map();
var day = 0;
var month = 0;
var year = 0;
for (let i = 0; i <= 12; i++) {
    monthMap.set(i, 0);
}
function birthdays(times) {
    for (let i = 1; i <= times; i++) {
        month = Math.floor(Math.random() * 12) + 1;
        monthMap.set(month, monthMap.get(month) + 1);

        day = 0;
        if (Math.floor(Math.random() * 2) + 1 == 1) {
            year = 92;
        } else {
            year = 93;
        }

        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            day = Math.floor(Math.random() * 31) + 1;
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            day = Math.floor(Math.random() * 30) + 1;
        } else if (month == 2 && year == 92) {
            day = 29;
        } else if (month == 2 && year == 93) {
            day = 28;
        }

        console.log("Day :" + day + " Month :" + month + " Year :" + year);
    }
    console.log(monthMap);
}

console.log(birthdays(50));