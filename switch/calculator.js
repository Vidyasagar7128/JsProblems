var readlineSync = require('readline-sync')

var operation = readlineSync.question('Enter Number for operation: ')

console.log('1.Foot to inches 2.Feet to Meter 3.Inch to Feet 4.Meter to Feet')
var number = readlineSync.question('Enter Number: ')

switch (number) {
    case 1:
        var result = operation / 12
        console.log(`Foot to Inches: ${result}`)
        break;
    case 2:
        var result = operation * 0.3048
        console.log(`Foot to Meter: ${result}`)
        break;
    case 3:
        var result = operation / 12
        console.log(`Inch to Feet: ${result}`)
        break;
    case 4:
        var result = operation * 3.281
        console.log(`Meter to Feet: ${result}`)
        break;
    default:
        console.log('Invalid option')
}