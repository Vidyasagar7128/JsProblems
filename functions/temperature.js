var readlineSync = require('readline-sync');

var c = readlineSync.questionInt('Enter the temperature in degree celsius : ');
var f1 = readlineSync.questionInt('Enter the temperature in degree Fahrenheit : ');

var choice = readlineSync.questionInt("1.Convert temperature in Fahrenheit\n2.Convert temperature in celsius\nEnter your choice = ");

checkTemprature(choice, c, f1)

function checkTemprature(choice, c, f1) {
    switch (choice) {
        case 1:
            // it converts Celsius into Fahrenheit
            var f = (c * 9 / 5) + 32;
            console.log("Temperature in Fahrenheit : " + f);
            break;
        case 2:
            // it converts Fahrenheit into Celsius
            var c1 = (f1 - 32) * 5 / 9;
            console.log("\nTemperature in Celsius : " + c1);
            break;
    }
}